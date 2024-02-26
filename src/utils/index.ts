/// <reference path="./instaloader.d.ts" />

import { exec } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { promisify } from 'node:util';
import xss from 'xss';

const execAsync = promisify(exec);

function instaloaderCmd(postId: string) {
  return `instaloader --no-pictures --no-videos --request-timeout 15 --dirname-pattern "${__dirname}/{target}" --filename-pattern 1 --no-compress-json  -- -${postId}`;
}

async function getPostText(postId: string) {
  const textPath = join(__dirname, `-${postId}`, '1.txt');
  try {
    const reader = await readFile(textPath);
    return reader.toString();
  } catch {
    return '';
  }
}

async function getPostInfo(postId: string) {
  const text = await getPostText(postId);
  const postPath = join(__dirname, `-${postId}`, '1.json');
  const reader = await readFile(postPath);
  const data = JSON.parse(reader.toString()) as InstaloaderData;
  const { owner, display_resources, edge_sidecar_to_children } = data.node;
  const media = [
    display_resources[display_resources.length - 1],
    ...(edge_sidecar_to_children?.edges?.length
      ? edge_sidecar_to_children.edges.map(
          e => e.node.display_resources[e.node.display_resources.length - 1],
        )
      : []),
  ];
  return {
    author: owner?.full_name,
    caption: `<a href="https://www.instagram.com/p/${postId}" rel="noopener noreferrer"><b>${xss(
      owner?.full_name,
    )}</b></a><b>：</b>\n\n${xss(text)}`,
    media,
  };
}

export async function instagramScraper(postId: string) {
  const { stderr } = await execAsync(instaloaderCmd(postId));
  if (stderr) {
    throw new Error(stderr);
  }
  const postInfo = await getPostInfo(postId);
  return postInfo;
}
