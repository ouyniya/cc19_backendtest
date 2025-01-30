const express = require("express");
const authenticate = require("../middlewares/authenticate")
const router = express.Router();
const upload = require("../middlewares/upload")
const userControllers = require("../controllers/user-controllers")

router.get("/", authenticate, userControllers.getProfile);

router.put("/", authenticate, upload.single("profile"), userControllers.updateProfile);

module.exports = router;
