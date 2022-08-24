import { estiramientosData } from "../assets/estiramientos-data.js";
import { opcionLateral } from "../components/opcion-lateral.js";
import { quitarHijos } from "../components/quitar-hijos.js";
import { estiramientos } from "./estiramientos.js";

const d = document;
const pathImg = "images/estiramientos/vistas/";

export function estiramiento(elemento) {
  quitarHijos("root");
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

  opcionLateral("images/icons/back.png", "back", "icono-lateral", null);
}

function eventos() {
  d.getElementById("back").addEventListener("click", () => {
    estiramientos();
    d.getElementById("back").remove();
  });
}
