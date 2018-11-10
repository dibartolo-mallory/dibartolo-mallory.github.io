//AJAX requests random dog pictures
var xmlhttp = new XMLHttpRequest();
//executes the following function when the request receives an answer
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var image = '<img src="' + myObj.message + '"/>'; 
        document.getElementById("pic").innerHTML = image; 
      
    }    

};
//specifies the type of request
//("method", "url", "true(asynchronous), fasle(synchronous))
xmlhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
//sends the request to the server- used for GET
xmlhttp.send();
/////////////////////////////////
/////////////////////////////////

//Dom manipulation- adding markup and text for heading and paragraph
var heading = document.createElement("h1");
var headingNode = document.createTextNode("Man's Best Friend");
heading.appendChild(headingNode);
var firstElement = document.getElementById("section1"); 
firstElement.appendChild(heading);

var heading = document.createElement("p");
var headingNode = document.createTextNode("Furry, Cuddly, Cute, Loyal");
heading.appendChild(headingNode);
var firstElement = document.getElementById("section1"); 
firstElement.appendChild(heading);  

 
///////////////////////////////////
//Local storage of a list of dog names created by the user
//Using JSON parse and stringify to get and store the data


//establishing constants for the elements in the dog name list maker
const section = document.getElementById('section2'); 
const ul = document.getElementById('nameList');
const addButton = document.getElementById('addName');
const deleteButton = document.getElementById('deleteList');
const input = document.getElementById('item');
//an array that stores the names entered by the user
//the array will include any items in localstorage previously entered by the user
//and will be available for any new entries by the user
let namesArray = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
//stringify the array for localstorage
localStorage.setItem('names', JSON.stringify(namesArray));
//a constant that stores items in localstorage so they can be used in the display 
const data = JSON.parse(localStorage.getItem('names'));
//creates list items for the unordered name list
const buildList = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
//when the user clicks the addButton names are added to the array
//input field is cleared for a new entry
addButton.addEventListener('click', function (e) {
  namesArray.push(input.value);
  localStorage.setItem('names', JSON.stringify(namesArray));

  buildList(input.value);
  input.value = "";
});

//loops through the items retreived and parsed from local storage and displays them
data.forEach(item => {
  buildList(item);
});
//deletes the list from the screen as well as the names from local storage
deleteButton.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
