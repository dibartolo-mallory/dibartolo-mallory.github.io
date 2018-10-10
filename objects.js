//Pseudoclssical Instantiation 
//Constructors: 
var Instrument = function(name, color, volume) {
  this.name = name;
  this.color = color;
  this.volume = volume; 
}

//Inherits from the basic Instrument constructor
var Percussion = function(name, color, volume, type) {
  Instrument.call(this, name, color, volume)
  this.type = type; 
}

//Inherits from the basic Instrument constructor
var Guitar = function(name, color, volume, stringMaterial, soundProduction, make) {
  Instrument.call(this, name, color, volume)
  this.stringMaterial = stringMaterial; 
  this.soundProduction = soundProduction; 
  this.make = make;
}

//Methods
Percussion.prototype.makesSound = function() {
  //var drumSound = "Bam Bam Bam"; 
  //return drumSound; 
  document.getElementById('drumSound').innerHTML = "Bam Bam Bam";  
}

Guitar.prototype.makesSound = function() {
  document.getElementById('guitarSound').innerHTML = "meeeeedleeeemeeeedlemeeeeeeeeeee"; 
}

//Objects

var instrument1 = new Instrument('Kazoo', 'Red', 'Medium'); 
//Adding price property
instrument1.price = 7; 


var drum1 = new Percussion('Snare', 'Blue', 'Loud', "Drum");
//Adding price property 
drum1.price = 150; 

var guitar1 = new Guitar('Stratocaster', 'Sea Foam Green', 'Loud', 'Steel', 'Electric', 'Fender');
//Adding price property 
guitar1.price = 800; 


//add price property
instrument1.price = 7; 
drum1.price = 150; 
guitar1.price = 800; 

//change a property- toggle with a button?



//Accessing Information in the objects
document.getElementById('name1').innerHTML = instrument1.name; 
document.getElementById('color1').innerHTML = "Color: " + instrument1.color; 
document.getElementById('volume1').innerHTML = "Volume: " + instrument1.volume; 
document.getElementById('price1').innerHTML = "Price: " + instrument1.price; 

document.getElementById('type2').innerHTML = drum1.type; 
document.getElementById('name2').innerHTML = "Type: " + drum1.name; 
document.getElementById('color2').innerHTML = "Color: " + drum1.color; 
document.getElementById('volume2').innerHTML = "Volume: " + drum1.volume;
document.getElementById('price2').innerHTML = "Price: " + drum1.price; 

document.getElementById('type3').innerHTML = guitar1.soundProduction + " Guitar"; 
document.getElementById('name3').innerHTML = guitar1.make + " " + guitar1.name; 
document.getElementById('color3').innerHTML = "Color: " + guitar1.color; 
document.getElementById('volume3').innerHTML = "Volume: " + guitar1.volume;  
document.getElementById('volume3').innerHTML = "Price: " + guitar1.price; 


