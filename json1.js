var xmlhttp = new XMLHttpRequest();
//executes the following function when the request receives an answer
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.pets[0].animal;
    }
};
//specifies the type of request
//("method", "url", "true(asynchronous), fasle(synchronous))
xmlhttp.open("GET", "json.json", true);
//sends the request to the server- used for GET
xmlhttp.send();

