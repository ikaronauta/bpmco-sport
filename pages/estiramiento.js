import { estiramientosData } from "../assets/estiramientos-data.js";
import { itemAtras } from "../components/item-atras.js";
import { removeChild } from "../components/remove-child.js";
import { estiramientos } from "./estiramientos.js";

const d = document;
const pathImg = "images/estiramientos/";

export function estiramiento(elemento) {
  removeChild();
  crearContenedorPrincipal(elemento);
  eventos();
}

function crearContenedorPrincipal(elemento) {
  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("estiramiento-contenedor-principal");

  let h2 = d.createElement("h2");
  let titulo = d.createTextNode(estiramientosData[elemento - 1].nombre);
  h2.appendChild(titulo);

  contenedorPrincipal.appendChild(h2);
  d.getElementById("root").appendChild(contenedorPrincipal);

  crearContenedoresSecundarios(elemento, contenedorPrincipal);
}

function crearContenedoresSecundarios(elemento, contenedorPrincipal) {
  let contenedorSecundario = d.createElement("div");
  contenedorSecundario.classList.add("estiramiento-contenedor-secundario");

  let img = d.createElement("img");
  img.classList.add("estiramniento-img");
  img.src = pathImg + estiramientosData[elemento - 1].imagenVista;
  img.setAttribute("alt", estiramientosData[elemento - 1].nombre);

  contenedorSecundario.appendChild(img);
  contenedorPrincipal.appendChild(contenedorSecundario);

  itemAtras(contenedorSecundario);
}

function eventos() {
  d.querySelector(".atras").addEventListener("click", () => estiramientos());
}
