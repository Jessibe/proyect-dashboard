
var boton = document.getElementById("butn");
function showMenu() {
 var menu = document.getElementById("menu");
 if(menu.classList.contains("close-menu")) {
   menu.classList.remove("close-menu");
   menu.classList.add("open-menu");
 } else {
   menu.classList.remove("open-menu");
   menu.classList.add("close-menu");
 }
}
boton.addEventListener("click",showMenu); 

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
