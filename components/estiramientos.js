import { removeChild } from "./remove-child.js";
import { estiramientosData } from "../assets/estiramientos-data.js"

const d = document;
const pathImg = "../images/estiramientos/"

export function estiramientos() {
  removeChild();
  crearContenedorPrincipal();
  gridEstiramientos();
}

function crearContenedorPrincipal(){
  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("estiramientos-contenedor-principal");
  d.getElementById("root").appendChild(contenedorPrincipal);
}

function gridEstiramientos() {
  estiramientosData.map(function(estiramiento){
    tarjeta(estiramiento);
  });
}

function tarjeta(item){
  let h2 = d.createElement("h2");
  let tituloTarjeta = d.createTextNode(item.nombre)
  h2.appendChild(tituloTarjeta);
  
  let img = d.createElement("img");
  img.classList.add("estiramientos-imagen-tarjeta");
  img.src = pathImg + item.imagen;
  
  let p = d.createElement("p");
  let tags = d.createTextNode(item.tags.join(", "));
  p.appendChild(tags);
  
  let contenedorTarjeta = d.createElement("div");
  contenedorTarjeta.classList.add("estiramientos-contenedor-tarjeta");
  
  contenedorTarjeta.appendChild(h2);
  contenedorTarjeta.appendChild(img);
  contenedorTarjeta.appendChild(tags);
  
  d.querySelector(".estiramientos-contenedor-principal").appendChild(contenedorTarjeta);
}
