import { estiramientosData } from "../assets/estiramientos-data.js";
import { removeChild } from "../components/remove-child.js";
import { estiramientos } from "./estiramientos.js";

const d = document;
const pathImg = "../images/estiramientos/";

export function estiramiento(elemento) {
  removeChild();
  crearContenedores(elemento);
  eventos();
}

function crearContenedores(elemento) {
  let back = d.createElement("img");
  back.classList.add("estiramiento-atras");
  back.src = "../images/icons/atras.png";
  back.setAttribute("alt", "Atras");

  let h2 = d.createElement("h2");
  let titulo = d.createTextNode(estiramientosData[elemento - 1].nombre);
  h2.appendChild(titulo);

  let img = d.createElement("img");
  img.classList.add("estiramniento-img");
  img.src = pathImg + estiramientosData[elemento - 1].imagenVista;
  img.setAttribute("alt", estiramientosData[elemento - 1].nombre);

  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("estiramiento-contenedor-principal");

  contenedorPrincipal.appendChild(back);
  contenedorPrincipal.appendChild(h2);
  contenedorPrincipal.appendChild(img);

  d.getElementById("root").appendChild(contenedorPrincipal);
}

function eventos() {
  d.querySelector(".estiramiento-atras").addEventListener("click", () =>
    estiramientos()
  );
}
