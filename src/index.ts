import TelegramBot, { type InputMedia } from 'node-telegram-bot-api';
import { botToken } from './credentials.json';
import { logger, splitArrayByTen } from './lib';
import { getTweetStatus } from './services';
import { instagramScraper } from './utils';

if (!botToken) {
  logger.error('No token.');
  throw 'Please add your bot token to the env.';
}

const bot = new TelegramBot(botToken, { polling: true });
logger.info('Bot running.');

async function sendMedias(
  media: DisplayResource2[],
  caption: string,
  chatId: number,
  message_id: number,
) {
  const inputMedia: InputMedia[] = media.map((e, index) => ({
    type: 'photo',
    media: e.src,
    width: e.config_width,
    height: e.config_height,
    caption: index === 0 ? caption : undefined,
    parse_mode: 'HTML',
  }));
  await bot.sendMediaGroup(chatId, inputMedia, {
    reply_to_message_id: message_id,
  });
}

bot.on('message', async msg => {
  const { id: uid, first_name, last_name } = msg.from ?? {};
  const { id: chatId } = msg.chat ?? {};
  const { text = '', message_id } = msg ?? {};

  if (!uid) {
    return 0;
  }

  const twitterMatch = text.match(
    /https:\/\/(twitter|x)\.com\/[^/]+\/status\/([0-9]+)/,
  );
  const tweetId = twitterMatch?.[2];
  if (tweetId) {
    try {
      const tweetStatus = await getTweetStatus(tweetId);
      const { media, caption, possibly_sensitive } = tweetStatus;

      if (media?.length > 1) {
        const inputMedia: InputMedia[] = media.map((e, index) => ({
          type: e.type === 'video' ? 'video' : 'photo',
          media: e.url,
          width: e.width,
          height: e.height,
          caption: index === 0 ? caption : undefined,
          duration: e.duration ? Math.ceil(e.duration) : undefined,
          thumbnail: e.thumbnail_url,
          parse_mode: 'HTML',
          has_spoiler: possibly_sensitive ?? false,
        }));
        await bot.sendMediaGroup(chatId, inputMedia, {
          reply_to_message_id: message_id,
        });
      } else if (media?.length === 1) {
        const e = media[0];
        if (e.type === 'video' || e.type === 'gif') {
          await bot.sendVideo(chatId, e.url, {
            reply_to_message_id: message_id,
            caption,
            parse_mode: 'HTML',
            has_spoiler: possibly_sensitive ?? false,
          });
        } else {
          await bot.sendPhoto(chatId, e.url, {
            reply_to_message_id: message_id,
            caption,
            parse_mode: 'HTML',
            has_spoiler: possibly_sensitive ?? false,
          });
        }
      } else {
        await bot.sendMessage(chatId, caption, {
          reply_to_message_id: message_id,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        });
      }
      return logger.info(
        `${uid} - ${first_name} ${last_name ?? ''} shared ${tweetId}.`,
      );
    } catch (error) {
      if ((error as Error)?.message === 'Request failed with status code 404') {
        await bot.sendMessage(chatId, `未找到贴文` ?? '未知错误', {
          reply_to_message_id: message_id,
        });
      } else {
        await bot.sendMessage(chatId, (error as Error)?.message ?? '未知错误');
      }
      return logger.error((error as Error)?.message ?? error);
    }
  }

  // https://www.instagram.com/p/postId
  const instagramMatch = text.match(
    /https:\/\/www\.instagram\.com\/p\/([^/?&]+)/,
  );
  const instagramPostId = instagramMatch?.[1];
  if (instagramPostId) {
    try {
      const postInfo = await instagramScraper(instagramPostId);
      const { caption, media } = postInfo;

      if (media.length === 1) {
        const e = media[0];
        await bot.sendPhoto(chatId, e.src, {
          reply_to_message_id: message_id,
          caption,
          parse_mode: 'HTML',
        });
      } else {
        if (media.length <= 10) {
          await sendMedias(media, caption, chatId, message_id);
        } else {
          const queue = splitArrayByTen(media);
          for (const node of queue) {
            await sendMedias(node, caption, chatId, message_id);
          }
        }
      }
      return logger.info(
        `${uid} - ${first_name} ${last_name ?? ''} shared ${instagramPostId}.`,
      );
    } catch (error) {
      if ((error as Error)?.message === 'Request failed with status code 404') {
        await bot.sendMessage(chatId, `未找到贴文` ?? '未知错误', {
          reply_to_message_id: message_id,
        });
      } else {
        await bot.sendMessage(chatId, (error as Error)?.message ?? '未知错误');
      }
      return logger.error((error as Error)?.message ?? error);
    }
  }
});
