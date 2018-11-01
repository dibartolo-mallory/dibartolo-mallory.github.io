/*var section = document.getElementById('dogInfo'); 
var requestURL = 'https://dog.ceo/api/breeds/list/all
';
var request = new XMLHttpRequest();
    request.open('GET', 'https://dog.ceo/api/breeds/list/all', true);
    xhttp.onreadystatechange == 4 && this.status == 200 {
        var response = JSON.parse(this.responseText);
        
    }

    request.responseType = 'json'; 
    request.send(); 

    request.onload = function() {
    var dogData = request.response;
        //populateSection(townData); 
        showDogs(dogData);
    }
    
function showDogs(dogData) {
    var dogs = dogData['dogs']; 
    document.getElementById('dogOne').innerHTML = dogs[0].name; 
}*/

function dogOption() {
//build the dog page 
var heading = document.createElement("h1");
var headingNode = document.createTextNode("A Page About Dogs");
heading.appendChild(headingNode);
var firstElement = document.getElementById("section1"); 
firstElement.appendChild(heading);
 
var heading = document.createElement("h2");
var headingNode = document.createTextNode("Man's Best Friend");
heading.appendChild(headingNode);
var firstElement = document.getElementById("section1"); 
firstElement.appendChild(heading);

var para = document.createElement("p");
var node = document.createTextNode("Dogs are loyal, fun, cuddly, and sweet.");
para.appendChild(node);
var element = document.getElementById("section2");
element.appendChild(para);
  
var image = document.createElement('img'); 
image.setAttribute("src", "http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg");
image.setAttribute("height", "228");
image.setAttribute("alt", "Adorable puppy.");
document.body.appendChild(image); 
 
 //delete elements that are no longer needed
var parent = document.getElementById("buttons");
var child1 = document.getElementById("dogButton");
parent.removeChild(child1);
 
 var child2 = document.getElementById("catButton"); 
  parent.removeChild(child2); 
  
  var body = document.getElementById("wrapper"); 
  var heading = document.getElementById("heading1"); 
  body.removeChild(heading); 
  
  
  //var list = document.getElementById("nameList"); 
 // var input = document.getElementById("item"); 
 // var button = document.getElementById("addItem");
  

}



function catOption() {
  
var heading = document.createElement("h1"); 
var headingNode = document.createTextNode("A Page About Cats");
heading.appendChild(headingNode);
var firstElement = document.getElementById("section1"); 
firstElement.appendChild(heading);
  
var heading = document.createElement("h2"); 
var headingNode = document.createTextNode("Cats aren't man's best friend, but they're still cool.");
heading.appendChild(headingNode);
var firstElement = document.getElementById("section1"); 
firstElement.appendChild(heading);

var para = document.createElement("p");
var node = document.createTextNode("Cats are soft, friendly, and sweet.");
para.appendChild(node);
var element = document.getElementById("section2");
element.appendChild(para);
  
var image = document.createElement('img'); 
image.setAttribute("src", "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg");
image.setAttribute("height", "228");
image.setAttribute("alt", "Adorable puppy.");
document.body.appendChild(image); 
  
//remove elements not needed  
var parent = document.getElementById("buttons");
var child1 = document.getElementById("dogButton");
parent.removeChild(child1);
 
var child2 = document.getElementById("catButton"); 
  parent.removeChild(child2); 
  
  var body = document.getElementById("wrapper"); 
  var heading = document.getElementById("heading1"); 
  body.removeChild(heading); 
  

}

//var list = document.getElementById('nameList'); 
function addName() {

  var myItem = document.getElementById('nameInput').value; 
  myItem.value = ''; 

 //document.write(myItem); 
 // myItem.value = ' '; 
  var listItem = document.createElement("li"); 
  //var listItem = document.createElement('li');
  var listItemNode = document.createTextNode(myItem);
  //listText.textContent = myItem; 
  listItem.appendChild(listItemNode);
  //listItem.appendChild(listText);
  var nameList = document.getElementById("nameList"); 
  nameList.appendChild(listItem);
  
  document.getElementById("nameInput").value = '';
  
  //list.appendChild(listItem); 
  
  
   
 /* var name = getElementById("item").value;
  
  var listItem = document.createElement("li"); 
  var listItemNode = document.createTextNode(name);
  listItem.appendChild(listItemNode);
  var nameList = document.getElementById("nameList"); 
  nameList.appendChild(listItem);*/
 
  /*var para = document.createElement("p");
var node = document.createTextNode("Cats are soft, friendly, and sweet.");
para.appendChild(node);
var element = document.getElementById("section2");
element.appendChild(para);*/
  
}
