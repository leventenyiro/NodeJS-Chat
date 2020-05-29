this.domain = "http://localhost"
this.port = "8080"
this.data = []

function login() {
    var xhttp = new XMLHttpRequest()
    var usernameEmail = document.getElementById("input_username_email").value
    var password = document.getElementById("input_password").value
    if (usernameEmail != "" && password != "") {
        var data = { usernameEmail: usernameEmail, password: password }
        var url = `${this.domain}:${this.port}/chat/login`
        xhttp.open("POST", url, false)
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send(JSON.stringify(data))
        this.data = JSON.parse(xhttp.response);

        //document.getElementById("result").innerHTML = this.data.login
        if (this.data.login) {
            alert("Login successful")
            var usernameEmail = document.getElementById("input_username_email").value = ""
        } else
            alert("Login unsuccessful!")
    } else {
        alert("Something's missing!")
    }
    var password = document.getElementById("input_password").value = ""
}