var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.pets[0].animal;
    }
};
xmlhttp.open("GET", "/json.json", true);
xmlhttp.send();

