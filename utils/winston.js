const { createLogger, transports, format } = require('winston')
require('winston-daily-rotate-file')

const logger = createLogger({
    transports: [
        new transports.DailyRotateFile({
            filename: `${process.cwd()}/logs/info-%DATE%.log`,
            level: 'info',
            format: format.combine(
                format.timestamp(), 
                format.json(),
                format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`)
            ),
            datePattern: 'YYYY-MM-DD',
            maxFiles: '7d',
        }),
        new transports.DailyRotateFile({
            filename: `${process.cwd()}/logs/errors-%DATE%.log`,
            level: 'error',
            format: format.combine(
                format.timestamp(), 
                format.json(),
                format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`)
            ),
            datePattern: 'YYYY-MM-DD',
            maxFiles: '7d',
        }),
        new transports.DailyRotateFile({
            filename: `${process.cwd()}/logs/http-%DATE%.log`,
            level: 'http',
            format: format.combine(
                format.timestamp(), 
                format.simple()
            ),
            datePattern: 'YYYY-MM-DD',
            maxFiles: '7d',
        }),
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize(),
                format.timestamp(), 
                format.simple()
            )
        })
    ]
})

module.exports = logger