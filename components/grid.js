import { tarjetaGrid } from "../components/tarjetaGrid.js";
import { buscador } from "./buscador.js";

const d = document;

export function grid(array, pathImg) {
  crearContenedorGrid();
  eventos(array);

  array.map(function (elemento) {
    tarjetaGrid(elemento, pathImg);
  });
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

function eventos(array) {
  d.getElementById("buscador").addEventListener("keyup", function () {
    cargarGrid(array);
  });
}

function cargarGrid(array) {
  let filtro = d.getElementById("buscador").value;

  array.filter(function (item) {
    let titulo = item.nombre.toLowerCase();

    console.log(titulo.includes(filtro.toLowerCase()));
  });
}
