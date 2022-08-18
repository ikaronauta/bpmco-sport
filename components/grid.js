// import { tarjetaGrid } from "../components/tarjetaGrid.js";
import { buscador } from "./buscador.js";
import { cargarGrid } from "./cargar-grid.js";

const d = document;

export function grid(array, pathImg) {
  crearContenedorGrid();
  eventos(array, pathImg);
  cargarGrid(array, pathImg);
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

function eventos(array, pathImg) {
  d.getElementById("buscador").addEventListener("keyup", function () {
    cargarGrid(array, pathImg);
  });
}
