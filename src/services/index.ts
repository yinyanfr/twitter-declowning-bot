import axios from 'axios';
import { UA } from '../credentials.json';
import xss from 'xss';

const request = axios.create({
  baseURL: 'https://api.fxtwitter.com/',
  timeout: 2000,
  headers: { 'User-Agent': UA },
});

export async function getTweetStatus(tweetId: string | number) {
  const result = await request.get(`/status/${tweetId}`);
  const data = result?.data as APIResult;
  const tweet = data?.tweet;
  if (data?.code === 200 && tweet) {
    const { url, author, text, media } = tweet;
    const altText = media?.all?.[0]?.altText;
    return {
      url,
      authorName: author?.name,
      text,
      media: media?.all,
      altText,
      caption: `<a href="${url}" rel="noopener noreferrer"><b>${xss(
        author?.name,
      )}</b></a><b>：</b>\n\n${xss(text)}${
        altText ? `\n\n${xss(altText)}` : ''
      }`,
    };
  }
  throw new Error(data?.message);
}
