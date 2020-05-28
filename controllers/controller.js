var Database = require("../models/Database")
var Bcrypt = require("../models/Bcrypt")

exports.registration = (req, res) => {
    var db = new Database()
    var bcrypt = new Bcrypt()
    bcrypt.encrypt(req.body.password, (password) => {
        db.registration(req, password, (result) => {
            res.send("Sikeres regisztráció!")
            db.end()
        })
    })
}

exports.login = (req, res) => {
    var db = new Database()
    var bcrypt = new Bcrypt()
    db.login(req, (result) => {
        bcrypt.decrypt(req.body.password, result[0].password, (hash) => {
            if (hash)
                res.send("Helyes bejelentkezés")
            else
                res.send("Helytelen bejelentkezés")
            db.end()
        })
    })
}