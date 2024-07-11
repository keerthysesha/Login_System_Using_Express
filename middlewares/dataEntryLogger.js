const fs = require('fs');
const filepath = './middlewares/logFile.txt';

const dataEntryLogger = (request, response, next) => {
    response.on('finish', () => {
        const currentDate = new Date();
        const status = response.statusCode >= 400 ? 'Authentication Failed' : 'Authentication Successful';
        fs.appendFileSync(filepath, 'New user Authenticated!\n' , 'utf-8');
        fs.appendFileSync(filepath, `Username: ${request.params.uname}\n`, 'utf-8');
        fs.appendFileSync(filepath, `Password: ${request.params.upwd}\n`, 'utf-8');
        fs.appendFileSync(filepath, `URL: ${request.originalUrl}\n`, 'utf-8');
        fs.appendFileSync(filepath, `Date: ${currentDate.toLocaleString()}\n`, 'utf-8');
        fs.appendFileSync(filepath, `Method Type: ${request.method}\n`, 'utf-8');
        fs.appendFileSync(filepath, `Status: ${status} \n\n`, 'utf8');
    });

    next()
}

module.exports = dataEntryLogger