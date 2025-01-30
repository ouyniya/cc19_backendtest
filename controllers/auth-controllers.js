const createError = require('../utils/createError')

exports.register = (req, res, next) => {

    try {
      const { email, password } = req.body
      console.log(email,password)
      
      if (!email || !password) {
      // const error = new Error ("email and password are required.")
      // error.statusCode = 400;
  
      // throw error;
  
      // -- ****** when call createError try to return ... as always  ******* 
      return createError(400, "Email and password are required."); 
      // -- ****** when call createError try to return ... as always  *******
  
    }
    
    res.json({ email: email, password: password });
  
    } catch (err) {
      next(err)
    }
  
  }

exports.login = (req, res) => {
    res.json({ message: "Login" });
  }