function login() {
    fetch('./login.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if ((document.getElementById("username").value == data.username) 
            && (document.getElementById("password").value == data.password)) {
                document.getElementById('loginform').hidden=true;
                document.getElementById('loggedin').hidden=false;
                document.getElementById('loggedin').textContent = "Welcome back \n" + data.username;
        }
        else {
            alert("Incorrect Username and/or Password")
        }
        
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}