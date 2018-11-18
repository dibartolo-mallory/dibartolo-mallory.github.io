/*Slider script*/
function toggleNav() {
       var updateElement = document.getElementById("menu-icon");
       var showMenu = document.getElementById("menu");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("slide-button");
    showMenu.classList.toggle("slide-menu"); 
}  
/*Mouse Over Script*/
function addClass(x) {
  x.classList.add("largerCircle"); 
}

function removeClass() {
  x.classList.remove("largerCircle"); 
}

/*On Change Script*/
function onChange() {
  var button = document.getElementById("submitButton"); 
  button.classList.add("highlight"); 
  
}

/*On Focus Script*/
function onFocus() {
   input = document.getElementById("inputField");
  input.classList.add("inputHighlight");

}

function onBlur() {
  var input = document.getElementById("inputField");
  input.classList.remove("inputHighlight");
}

function check() {
  var inputField = document.getElementById("inputField2"); 
  var check = document.getElementById("inputField2").value == "blue"; 
  if(check) {
      inputField.classList.remove("incorrectValue"); 
      inputField.classList.toggle("correctValue");
  }else {
    inputField.classList.remove("correctValue"); 
    inputField.classList.toggle("incorrectValue"); 
  }
  
  
}


// Touch triggers
const touchEvents = document.getElementById("canvas");
touchEvents.addEventListener("touchstart", touchStart);
touchEvents.addEventListener("touchend", touchEnd);

function touchStart() {
    touchEvents.classList.toggle('touchBackgroundAnimation');
}

function touchEnd() {
    touchEvents.classList.toggle('touchBackgroundAnimation'); 
}
