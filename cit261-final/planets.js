 /*function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'planets.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
                
          }
    };
    xobj.send(null);  
 }
 


function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    var infoDiv = document.getElementById('infoDiv');
     infoDiv.innerHTML = actual_JSON; 
 });
}

*/





function toggleInfo(clicked_id) {
    //init(); 
    //get the div for the information
    var infoDiv = document.getElementById('infoDiv'); 
    //get the id of the planet clicked
    var planetId = event.srcElement.id;
    
    infoDiv.classList.add("planetInfoShow"); 
    var close = document.getElementById("close"); 
    close.classList.add("show"); 
    
    var name = document.getElementById("planet-name"); 
    var facts = document.getElementById("planet-facts"); 
    
    var instructions = document.getElementById("instructions");
    instructions.classList.add("disappear"); 
    
    var welcome = document.getElementById("welcome");
    welcome.classList.add("hidden"); 
 
    switch(planetId) {
            
        case "sun" :
                 name.innerHTML = "The Sun";
                 facts.innerHTML = "Age: 4.6 Billion Years" + '<br>' + "Type: Yellow Dwarf G2V" + '<br>' + "Diameter: 1,392,684km" + '<br>' + "Surface Temperature: 5,500 degress Celcius" + '<br>' + "The Sun (or Sol), is the star at the centre of our solar system and is responsible for the Earth’s climate and weather. The Sun is an almost perfect sphere with a difference of just 10km in diameter between the poles and the equator. The average radius of the Sun is 695,508 km (109.2 x that of the Earth) of which 20–25% is the core.";
            break; 
                   
    case "mercury" :
            name.innerHTML = "Mercury";
                 facts.innerHTML = "Diameter: 4879km" + '<br>' + "Distance from the Sun: 57,909,227km" + '<br>' + "Orbit Period: 88 days" + '<br>' + "Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit, the next will occur on the 9th May 2016."; 
             break; 
            
        case "venus": 
            name.innerHTML = "Venus";
                 facts.innerHTML = "Diameter: 12,104km" + '<br>' + "Distance from the Sun: 108,209,475km" + '<br>' + "Orbit Period: 225 days" + '<br>' + "Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass. The surface of the planet is obscured by an opaque layer of clouds made up of sulphuric acid." ; 
            
            break; 
                   
        case "earth":
            name.innerHTML = "Earth";
                 facts.innerHTML = "Diameter: 12,742km" + '<br>' + "Distance from the Sun: 149,598,262km" + '<br>' + "Orbit Period: 365.24 days" + '<br>' + "Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.";  
            
            break; 
                   
        case "mars":
            name.innerHTML = "Mars";
                 facts.innerHTML = "Diameter: 6,779km" + '<br>' + "Distance from the Sun: 227,943,824km" + '<br>' + "Orbit Period: 1.9 years" + '<br>' + "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.";   
            
            break; 
                   
        case "jupiter":
            name.innerHTML = "Jupiter";
                 facts.innerHTML = "Diameter: 139,822km" + '<br>' + "Distance from the Sun: 778,340,821km" + '<br>' + "Orbit Period: 11.9 years" + '<br>' + "The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a “gas giant”.";   
            
            break; 
                   
        case "saturn":
            name.innerHTML = "Saturn";
                 facts.innerHTML = "Diameter: 116,464km" + '<br>' + "Distance from the Sun: 1,426,666,422km" + '<br>' + "Orbit Period: 29.5 years" + '<br>' + "Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei. Like Jupiter, Saturn is a gas giant and is composed of similar gasses including hydrogen, helium and methane.";   
            
            break; 
                   
        case "uranus":
            name.innerHTML = "Uranus";
                 facts.innerHTML = "Diameter: 50,724km" + '<br>' + "Distance from the Sun: 2,870,658,186km" + '<br>' + "Orbit Period: 84 years" + '<br>' + "Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. Uranus became the first planet discovered with the use of a telescope. Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as “rolling around the Sun on its side.”";   
            
            break; 
                   
        case "neptune":
            name.innerHTML = "Neptune";
                 facts.innerHTML = "Diameter: 49,244km" + '<br>' + "Distance from the Sun: 4,498,396,441km" + '<br>' + "Orbit Period: 164.8 years" + '<br>' + "Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position.";  
              break;       
                   
        case "pluto":
            name.innerHTML = "Pluto";
                 facts.innerHTML = "Is Pluto a Planet?" + '<br>' + "A planet is a celestial body that A- is in orbit around the sun, B- has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium shape, and C- has cleared the neighbourhood around its orbit." + '<br>' + "Under this definition, Pluto is NOT a planet, but has been deemed a dwarf planet because it has not yet cleared its orbit. This definition is under discussion, particularly by members of the planetary science community, and it may yet be further refined.";  
            
            break; 
                   
           
                   }
          
 

  
}

function fadeInfo() {
    var fadeOut = document.getElementById("infoDiv"); 
   
    fadeOut.classList.remove("planetInfoShow"); 
    
    
     var welcome = document.getElementById("welcome");
    welcome.classList.remove("hidden"); 
    
    
}


