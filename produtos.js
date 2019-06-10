var contador = 0;
function emitirAlerta(){
    loadJson() 
    //console.log("Contador "+contador++);
}

function loadJson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("main").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "produtos.json", true);
    xhttp.send();
  }

/*window.onload = function(){
    document.querySelector("main").innerHTML="Hello World";
    
    setInterval(emitirAlerta, 3000);
};*/