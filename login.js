const login = document.querySelector('.login'); 
login.onclick = (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const passWord = document.getElementById("passWord").value;

  // ngambil nilai array dari localstorage
  const users = JSON.parse(localStorage.getItem("users"));

  //Periksa apakah array users ada dan tidak kosong
  if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
      if (userName == users[i].username && passWord == users[i].password) {
        localStorage.setItem("username-logged-in", users[i].username)
        window.location.href="index.html";
        alert("Berhasil Login");
        return; 
      }
    }
  }
  

  // jika salah penginputan
  alert("Masukkan username dan password dengan benar");
}