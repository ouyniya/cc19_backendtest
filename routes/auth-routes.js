const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {
  try {
    const { email, password } = req.body
    console.log(email,password)
    
    if (!email || !password) {
    const error = new Error ("email and password are required.")
    error.statusCode = 400;

    throw error;
  }
  
  res.json({ email: email, password: password });

  } catch (err) {
    next(err)
  }
});

router.post("/login", (req, res) => {
  res.json({ message: "Login" });
});
module.exports = router;
