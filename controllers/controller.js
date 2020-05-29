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
        if (result.length > 0) {
            bcrypt.decrypt(req.body.password, result[0].password, (hash) => {
                if (hash)
                    res.json({ login: true })
                else
                    res.json({ login: false })
                db.end()
            })
        } else {
            res.json({ login: false })
            db.end()
        }
    })
}