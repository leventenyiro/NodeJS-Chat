var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
var router = require("./router")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/", router)

app.listen(8080, () => {
    console.log("Server is running...")
})