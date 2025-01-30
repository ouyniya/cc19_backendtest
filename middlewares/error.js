const errorHandler = (err, req, res, next) => {
    console.log(err);
    res
        .status(err.statusCode || 500) // false (no err code) >> 500 
        .json({
            message: err.message || "Internal Server Error" 
            // false (no err message) >> identified err msg 
        });
};

module.exports = errorHandler;