const logoutBtn = document.getElementById('logoutBtn');
const userIntro = document.getElementById("userIntro");

const BASE_URL = "http://localhost:3200/book"

logoutBtn.addEventListener('click', logoutFn);

function logoutFn() {
	localStorage.removeItem('username');
	window.location.href = "login.html";
}

if (!localStorage.getItem('username')) {
	window.location.href = "login.html";
} else {
	userIntro.innerText = "Hi " + localStorage.getItem('username');
}