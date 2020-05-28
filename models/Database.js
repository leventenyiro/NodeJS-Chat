class Database {
    constructor() {
        var mysql = require("mysql")
        this.conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "login"
        })
    }

    login(req, callback) {
        var sql = `SELECT password FROM user WHERE username = "${req.body.username}" OR email = "${req.body.email}"`
        this.conn.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    registration(req, password, callback) {
        var sql = `INSERT INTO user (username, email, password, firstname, lastname, birthdate) VALUES (
            "${req.body.username}",
            "${req.body.email}",
            "${password}",
            "${req.body.firstname}",
            "${req.body.lastname}",
            "${req.body.birthdate}")`
        this.conn.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    end() {
        this.conn.end()
    }
}

module.exports = Database