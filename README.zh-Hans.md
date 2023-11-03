# twitter-declowning-bot

![许可证](https://img.shields.io/github/license/yinyanfr/twitter-declowning-bot.svg?style=flat-square)
![大小](https://img.shields.io/github/repo-size/yinyanfr/twitter-declowning-bot?style=flat-square)
[![GitHub发布](https://img.shields.io/github/release/yinyanfr/twitter-declowning-bot.svg?style=flat-square)](https://github.com/yinyanfr/twitter-declowning-bot/releases/latest)

中文 | [English](./README.md)

一个 Telegram 机器人，用于响应 Twitter 贴文链接并发送其中的照片和视频。

[演示](https://t.me/twitter_declowning_bot)

## :broken_heart: 简介：Twitter 和 Telegram 有什么问题？

众所周知，Twitter 已经成为小丑的游乐场，而 Telegram 的最新更新则雪上加霜。

以前，您只需发送 Twitter 贴文的链接，Telegram 就会显示其图像的预览。而现在机制已经更改，Telegram 不再直接提供带图片的预览，只有被裁剪的缩略图。

即使是预览修复工具对这种情况也无能为力，这就是 `twitter-declowning-bot` 的用武之地。

## :star2: 这个机器人有什么作用？

`twitter-declowning-bot` 是一个 Telegram 机器人，只执行一个任务，即读取 Twitter 贴文的 URL 并将媒体发送回聊天。将机器人添加到您的聊天群组即可。

## :framed_picture: 截图

包含多张图片的 Twitter 贴文：

![包含多张图片的 Twitter 贴文](https://i.ibb.co/F3fqSzL/2023-11-03-16-58-43.png)

包含视频的 Twitter 贴文：

![包含视频的 Twitter 贴文](https://i.ibb.co/QNDdY9S/2023-11-03-16-58-59.png)

## :green_book: 快速开始

### 1. 下载最新版本

您可以在此处下载最新版本：[Releases](https://github.com/yinyanfr/twitter-declowning-bot/releases)

或者您可以克隆存储库：

```bash
git clone https://github.com/yinyanfr/twitter-declowning-bot.git
```

### 2. 安装依赖项

```bash
npm i
```

### 3. 在 `src/credentials.json` 中添加您的机器人令牌

```json
{
  "botToken": "YOUR_BOT_TOKEN",
  "UA": "TwitterDeclownBot/0.0.1"
}
```

### 4. 构建和部署

```bash
npm run build
```

您可以在 `dist/` 目录中找到编译后的版本。

## :information_source: 致谢

该项目使用 [Status Fetch API](https://github.com/FixTweet/FixTweet/wiki/Status-Fetch-API) 提供的 [FixTweet](https://github.com/FixTweet/FixTweet) 所提供的 API。
