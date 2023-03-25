const loggedInUsername = localStorage.getItem('username-logged-in')

if (loggedInUsername){
    const nama = document.getElementById('nama')
    nama.innerHTML= localStorage.getItem('username-logged-in')
}