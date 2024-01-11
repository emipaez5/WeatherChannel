const boton = document.querySelector(".btn")

const input = document.querySelector("input")

const lugar = document.querySelector("#lugar")
const temperatura = document.querySelector("#temperatura")
const cielo = document.querySelector("#cielo")
const icono = document.querySelector("#icono")

const info = document.querySelector("#info")





// Usar la api del clima con ajax, la peticion se hace en formato json.Usá $.getJSON para hacer un pedido AJAX


function cargarCiudad(){
  if(input.value !== ""){
  let ciudad = input.value
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es")
  // utilizo .done y .fail para manejar el error si es que la appi no tiene la info pedida ya sea por error de la persona o de la appi.
  // si no quiero manejar errores lo uso de la siguiente manera la funcion dentro del parentesis del $getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es",function(data) {todo el contenido})
        .done (function(data) {
            console.log(data)
            lugar.innerHTML = data.name + "<br>"
            temperatura.innerHTML = data.main.temp +"<sup>°C</sup>" +"<br>"
            cielo.innerHTML = data.weather[0].description
            icono.innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png" alt=""></img>'
            input.value = ""
          })
        .fail (function(){
            alert("No se pudo obtener la información del clima. Por   favor, verifica que el nombre de la ciudad sea correcto.")
            // info.innerHTML ="<h2>ERROR AL CARGAR LA CIUDAD ELEGIDA</h2>" 
            input.value = "" 
          })

  }else{
    alert("Debes escribir el nombre de una Ciudad")
  }

}

// cargarCiudad()

// Usar la api del clima con fetch, se hace la peticion y luego se transforma a formato json 
function cargarCiudad1() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    });
}
// cargarCiudad1();

boton.addEventListener("click",cargarCiudad)
