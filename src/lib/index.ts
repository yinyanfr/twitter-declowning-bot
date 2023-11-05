import { join } from 'node:path';
import winston from 'winston';

export enum ERROR_CODE {
  SLOWDOWN = 'SLOWDOWN',
  INVALID_INPUT = 'INVALID_INPUT',
  NOT_FOUND = 'NOT_FOUND',
}

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'twitter-declowning-bot' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({
      filename: join(__dirname, '../..', 'logs', 'error.log'),
      level: 'error',
    }),
    new winston.transports.File({
      filename: join(__dirname, '../..', 'logs', 'combined.log'),
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV === 'development') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
