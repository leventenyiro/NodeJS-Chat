var express = require("express")
var router = express.Router()
var controller = require("./controllers/controller")

router.post("/chat/login", controller.login)

router.post("/chat/registration", controller.registration)

module.exports = router