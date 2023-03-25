const submit_button = document.querySelector(".button");
submit_button.onclick = function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;

    if ( username == "" || pass == "" ) {
        alert("Harap isi semua kolom");
        return;
    }

    let user = {
        username: username,
        password: pass
    }

    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Berhasil Registrasi");
    window.location.href ="login.html";
}