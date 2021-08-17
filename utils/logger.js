const winston = require('winston');

class Logger {
  appLogger() {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [new winston.transports.Console()]
    })
    return logger;
  }
}

module.exports = new Logger();
