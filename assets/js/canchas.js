var botonFutbol =document.getElementById("botonFutbol");
var botonBasquet = document.getElementById("botonBasquet");
var botonTenis = document.getElementById("botonTenis");

botonFutbol.addEventListener("click",llamarFutbol);
botonBasquet.addEventListener("click",llamarBasquet);
botonTenis.addEventListener("click",llamarTenis);

var canchas=document.getElementsByClassName('canchas');
console.log(canchas);


function llamarFutbol(){
  canchas[0].style.display="block";
  canchas[1].style.display= "none";
  canchas[2].style.display= "none";

}

function llamarBasquet(){
  canchas[0].style.display="none";
  canchas[1].style.display= "block";
  canchas[2].style.display= "none";

}

function llamarTenis(){
  canchas[0].style.display="none";
  canchas[1].style.display= "none";
  canchas[2].style.display= "block";

}
