import { fortalecimientosData } from "../assets/fortalecimientos-data.js";
import { itemAtras } from "../components/item-atras.js";
import { removeChild } from "../components/remove-child.js";
import { fortalecimientos } from "./fortalecimientos.js";

const d = document;
const pathImg = "images/fortalecimientos/vistas/";

export function fortalecimiento(elemento) {
  removeChild();
  crearContenedorPrincipal(elemento);
  eventos();
}

function crearContenedorPrincipal(elemento) {
  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("fortalecimiento-contenedor-principal");

  let h2 = d.createElement("h2");
  let titulo = d.createTextNode(fortalecimientosData[elemento - 1].nombre);
  h2.appendChild(titulo);

  contenedorPrincipal.appendChild(h2);
  d.getElementById("root").appendChild(contenedorPrincipal);

  crearContenedoresSecundarios(elemento, contenedorPrincipal);
}

function crearContenedoresSecundarios(elemento, contenedorPrincipal) {
  let contenedorSecundario = d.createElement("div");
  contenedorSecundario.classList.add("fortalecimiento-contenedor-secundario");

  let contenedorVideo = d.createElement("div");
  contenedorVideo.classList.add("fortalecimiento-contenedor-video");
  let video = `<iframe class="video" width="100%" height="315" src="https://www.youtube.com/embed/${
    fortalecimientosData[elemento - 1].video
  }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  contenedorVideo.innerHTML = video;

  let contenedorTexto = d.createElement("div");
  contenedorTexto.classList.add("fortalecimiento-contenedor-texto");
  let descripcion = d.createTextNode(
    fortalecimientosData[elemento - 1].descripcion
  );
  contenedorTexto.appendChild(descripcion);

  let img = d.createElement("img");
  img.classList.add("fortalecimiento-img");
  img.src = pathImg + fortalecimientosData[elemento - 1].imagenVista;
  img.setAttribute("alt", fortalecimientosData[elemento - 1].nombre);

  if (fortalecimientosData[elemento - 1].video != "")
    contenedorSecundario.appendChild(contenedorVideo);

  contenedorSecundario.appendChild(contenedorTexto);
  contenedorSecundario.appendChild(img);
  contenedorPrincipal.appendChild(contenedorSecundario);

  itemAtras(contenedorSecundario);
}

function eventos() {
  d.querySelector(".atras").addEventListener("click", () => fortalecimientos());
}
