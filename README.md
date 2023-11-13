# twitter-declowning-bot

![license](https://img.shields.io/github/license/yinyanfr/twitter-declowning-bot.svg?style=flat-square)
![size](https://img.shields.io/github/repo-size/yinyanfr/twitter-declowning-bot?style=flat-square)
[![GitHub release](https://img.shields.io/github/release/yinyanfr/twitter-declowning-bot.svg?style=flat-square)](https://github.com/yinyanfr/twitter-declowning-bot/releases/latest)

English | [中文](./README.zh-Hans.md)

A Telegram Bot that reacts to Twitter post links and send the photos and videos back.

[Demo](https://t.me/twitter_declowning_bot)

## :broken_heart: TL;DR: What's the problem with Twitter and Telegram?

As we all know that Twitter has become a clown's playground, a recent update of Telegram has taken away all the fun.

Previously you could simply paste a link to a Twitter post, Telegram will show a preview with its image. Now the mechanic has changes so that only a cropped thumbnail image will be shown, and users are directed to the Twitter post URL instead of being able to view the image.

Even the preview fixers can do little to this situation, so here comes the `twitter-declowning-bot`.

## :high_brightness: What does this bot do?

`twitter-declowning-bot` is a telegram bot that does one single thing, read the Twitter post URLs and send the media back to the chat. Add the bot to your chat group and it's all done.

## :star2: Features

- No login / API key required
- Supports Tweet posts that contains multiple media
- Supports videos
- Supports spoiler mask

## :framed_picture: Gallery

Twitter post that contains multiple pictures:

![Twitter post that contains multiple pictures](https://i.ibb.co/F3fqSzL/2023-11-03-16-58-43.png)

Twitter post that contains video:

![Twitter post that contains video](https://i.ibb.co/QNDdY9S/2023-11-03-16-58-59.png)

## :green_book: Quick Start

### 1. Download the latest release

You can download the latest release here: [Releases](https://github.com/yinyanfr/twitter-declowning-bot/releases)

Or you can clone the repo:

```bash
git clone https://github.com/yinyanfr/twitter-declowing-bot.git
```

### 2. Install dependencies

```bash
npm i
```

### 3. Add your bot token to `src/credentials.json`

```json
{
  "botToken": "YOUR_BOT_TOKEN",
  "UA": "TwitterDeclowningBot/0.1.1"
}
```

### 4. Build and deploy

```bash
npm run build
```

You can find the production build at `dist/`

## :bookmark: Known Issues

- The bot cannot display twitter media labelled "gif" as video, not even labelled as "video", this may due to Telegram's bug.

## :information_source: Credits

This project uses the [Status Fetch API](https://github.com/FixTweet/FixTweet/wiki/Status-Fetch-API) provided by [FixTweet](https://github.com/FixTweet/FixTweet).
