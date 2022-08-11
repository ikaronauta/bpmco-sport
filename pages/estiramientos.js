import { removeChild } from "../components/remove-child.js";
import { estiramientosData } from "../assets/estiramientos-data.js";
import { grid } from "../components/grid.js";
import { estiramiento } from "./estiramiento.js";

const d = document;
const pathImg = "images/estiramientos/";

export function estiramientos() {
  removeChild();
  grid(estiramientosData, pathImg);
  cargarEventos();
}

function cargarEventos() {
  let elementos = Array.from(d.querySelectorAll(".contenedor-tarjeta"));
  elementos.map(function (elemento) {
    elemento.addEventListener("click", function () {
      estiramiento(elemento.id);
    });
  });
}
