import { contenidoIntroduccion } from "../assets/introduccion-contenido.js";

const d = document;
const pathImg = "../images/introduccion/";

let ir = Math.floor(Math.random() * contenidoIntroduccion.length);

export function introduccion() {
  crearContenedores();
}

function titulo() {
  let titulo = d.createTextNode("Introducción");
  let h1 = d.createElement("h1");
  h1.appendChild(titulo);

  d.getElementById("root").appendChild(h1);
}

function crearContenedores() {
  let img = d.createElement("img");
  img.classList.add("introduccion-img");
  img.src = pathImg + contenidoIntroduccion[ir].imagen;

  let contenedorTexto = d.createElement("div");
  contenedorTexto.classList.add("introduccion-contenedor-texto");

  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("introduccion-contenedor-principal");

  contenedorPrincipal.appendChild(img);
  contenedorPrincipal.appendChild(contenedorTexto);

  d.getElementById("root").appendChild(contenedorPrincipal);

  cargarTextos(contenedorTexto);
}

function cargarTextos(contenedor) {
  let h2 = d.createElement("h2");
  let textoTitulo = d.createTextNode(contenidoIntroduccion[ir].titulo);
  h2.appendChild(textoTitulo);

  let textoContenido = d.createTextNode(contenidoIntroduccion[ir].contenido);

  contenedor.appendChild(h2);
  contenedor.appendChild(textoContenido);
}
