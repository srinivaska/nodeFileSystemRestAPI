const responseUtils = {
    errorHandler : (error, message, res) =>{
        console.log("ERROR MESSAGE -- ", error.message);
        console.log(error.stack);
        res.send({
            status: 'error',
            message
          });
    }
}

module.exports = responseUtils;