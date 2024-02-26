# Changelog

## 0.3.0

`2024-02-26`

### Features

- Instagram support ([#8](https://github.com/yinyanfr/twitter-declowning-bot/pull/8))

## 0.2.0

`2023-11-13`

### Bugs

- Use InputMedia.type as "video" for gifs and others for the telegram API specs ([#7](https://github.com/yinyanfr/twitter-declowning-bot/pull/7)).

Please note that the bot still cannot display media labelled "gif" dynamically, this may due to a Telegram API bug, see "Known Issues" section in Readme.

### Features

- Mask media with `possibly_sensitive` flag ([#7](https://github.com/yinyanfr/twitter-declowning-bot/pull/7)).

## 0.1.2

`2023-11-08`

### Bugs

- Various Fixes ([#6](https://github.com/yinyanfr/twitter-declowning-bot/pull/6)).
  - Ceil video duration for the telegram API specs.
  - Sanitize HTML reserved charaters.
  - Fixed a bug where the bot returns an error when a given Twitter post contains no media.

## 0.1.1

`2023-11-05`

### Bugs

- Fixed a bug where 404 Errors from `axios` were not properly catched ([#5](https://github.com/yinyanfr/twitter-declowning-bot/pull/5)).

### Docs

- Added README.zh-Hans.md ([#4](https://github.com/yinyanfr/twitter-declowning-bot/pull/4)).

## 0.1.0

`2023-11-03`
