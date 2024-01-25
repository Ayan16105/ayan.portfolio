let nav= 
document.querySelector(".navbar");
window.onscroll=function() {
	if(document.documentElement.scrollTop > 20){
		nav.classList.add("header-scrolled");
	}
	else{
		nav.classList.remove("header-scrolled");
	}
}

window.addEventListener('load', () => {
	document.documentElement.scrollTop = 0;
})


const getNav = (getIndex) => {
	let selector = document.querySelectorAll('.nav-link');
	let buttonAct = document.querySelector('.navbar-toggler');
	let collapse = document.querySelector('.navbar-collapse');
	collapse.classList.remove('collapse','show')
	collapse.classList.add('collapse')
	buttonAct.classList.add('collapsed');
	buttonAct.setAttribute('aria-expanded', "false");
}