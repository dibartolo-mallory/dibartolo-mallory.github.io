function toggleNav() {
       var updateElement = document.getElementById("menu-icon");
       var showMenu = document.getElementById("menu");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("slide-button");
    showMenu.classList.toggle("slide-menu"); 
}  