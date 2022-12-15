const winston = require('winston')
require('winston-daily-rotate-file');

const { combine, timestamp, json, errors } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: '../logs/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d',
});

const logger = new winston.createLogger({
    level: 'info',
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [fileRotateTransport],
    exitOnError: false
});

module.exports = logger