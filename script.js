const button = document.getElementById("side-menu");
const headMenu = document.getElementById("header-menu");
const body = document.body;
const closeBtn = document.getElementById("close-btn");

button.addEventListener("click", ()=>  {
    headMenu.setAttribute("class", "ham-menu");
    body.style.position = "fixed";
});

closeBtn.addEventListener("click", ()=>  {
    headMenu.setAttribute("class", "header-menu");
    body.style.position = "unset";
});