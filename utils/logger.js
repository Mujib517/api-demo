const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // info, error, warn, debug
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/errors.log' })
  ]
})

module.exports = logger;


