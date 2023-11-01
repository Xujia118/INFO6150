"use strict";

(function() {
    const buttonNav = document.querySelector(".nav-menu-button");
    const submenuNav = document.querySelector(".submenu");
    
    buttonNav.addEventListener("click", function() {
        submenuNav.classList.toggle("open");
    });
})();



