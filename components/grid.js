import { tarjetaGrid } from "../components/tarjetaGrid.js";

const d = document;

export function grid(array, pathImg) {
  crearContenedorGrid();

  array.map(function (elemento) {
    tarjetaGrid(elemento, pathImg);
  });
}

function crearContenedorGrid() {
  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("contenedor-grid");
  d.getElementById("root").appendChild(contenedorPrincipal);
}
