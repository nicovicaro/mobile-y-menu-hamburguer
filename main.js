const openMenu = document.querySelector("#open-menu");
const navbar = document.querySelector("#navbar");
const closeMenu = document.querySelector("#close-menu")

openMenu.addEventListener("click", ()=> {
    navbar.classList.add("active");
})

closeMenu.addEventListener("click", ()=> {
	navbar.classList.add("closing");
	setTimeout (()=> {
		navbar.classList.remove("active");
		navbar.classList.remove("closing");
	}, 400);
})