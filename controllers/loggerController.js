const { request, response } = require('express');
const loggerData = require('../data/loggerData');

const checkLoggerData = (request, response) => {
    loggerData.map( iterator => {
        if(iterator.uname === request.params.uname && iterator.upwd === request.params.upwd)
        {
            return response.status(200).json({message: "Authentication Successfull"});
        }
        else{
            return response.status(404).json({message: "Authentication Failed"})
        }
    })
}


module.exports = {checkLoggerData}