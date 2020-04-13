import fs from 'fs';

const appLogger = (req, res, next) => {
  const { method } = req;
  const { url } = req;
  const status = res.statusCode;
  const start = process.hrtime();
  const end = process.hrtime(start);

  let responseTime = (end[0] * 1e9 + end[1]) / 1e6;

  responseTime = Math.trunc(Number(responseTime).toFixed(2));

  const logString = `${method} ${url} ${status} 1${responseTime}ms\n`;

  fs.appendFile('request_logs.txt', logString, (error) => {
    if (error) {
      console.log(error);
    }
  });

  next();
};

export default appLogger;
