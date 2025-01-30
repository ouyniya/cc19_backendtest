const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: "get post"})
})
router.post("/", (req, res) => {
    res.json({message: "post post"})
})
router.put("/", (req, res) => {
    res.json({message: "put post"})
})
router.delete("/", (req, res) => {
    res.json({message: "delete post"})
})

module.exports = router