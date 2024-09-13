const menu = document.querySelector(".menu");
const ulnav = document.querySelector(".ul-nav");

menu.onclick = () => {
    ulnav.classList.toggle("hidden");
};
