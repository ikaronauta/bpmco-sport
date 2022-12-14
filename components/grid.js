import { buscador } from "./buscador.js";
import { cargarGrid } from "./cargar-grid.js";

const d = document;

export function grid(array, pathImg, item) {
  crearContenedorGrid();
  eventos(array, pathImg, item);
  cargarGrid(array, pathImg, item);
}

function crearContenedorGrid() {
  let contenedorGrid = d.createElement("div");
  contenedorGrid.classList.add("contenedor-grid");

  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("grid-contenedor-principal");

  contenedorPrincipal.appendChild(buscador());
  contenedorPrincipal.appendChild(contenedorGrid);

  d.getElementById("root").appendChild(contenedorPrincipal);
}

function eventos(array, pathImg, item) {
  d.getElementById("buscador").addEventListener("keyup", function () {
    cargarGrid(array, pathImg, item);
  });
}
