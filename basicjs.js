//store the navigation list in a variable 
var navList = document.getElementById("navList");

//store each navigation item in an array 
var navItems = navList.getElementsByClassName("navItem");

//for the iteration starting at 0, and as long as the iteration is less than
//the length of the navItems array, and adding one to the iteration each loop through
for (var i = 0; i < navItems.length; i++) {
  //when the user clicks, run this function
  navItems[i].addEventListener("click", function() {
    //store each element that has a current class of active in this variable 
    var activeNow = document.getElementsByClassName("active");
    //replace the current active class with an empty string
    activeNow[0].className = activeNow[0].className.replace(" active", "");
    //the navItem just clicked now receives the active class
    this.className += " active";
  });
}
//use conditional statement to check for user input or an empty field
function checkValue() {
  //store the current value of the input field in a variable
  var userInput = document.getElementById("userInput");
  //if userInput exists and has a value
  if (userInput && userInput.value) {
  //display "Thanks" message to the user
  document.getElementById("message").innerHTML = "Thanks!"; 
  //otherwise...
} else {
  //display "Please enter a value" to the user
  document.getElementById("message").innerHTML = "Please enter a value."; 

  }

 
}
