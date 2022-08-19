import { cargarEventosTarjetas } from "./cargar-eventos-tarjetas.js";
import { tarjetaGrid } from "./tarjetaGrid.js";

const d = document;

export function cargarGrid(array, pathImg, item) {
  let criterioFiltro = d.getElementById("buscador").value.toLowerCase();

  d.querySelector(".contenedor-grid").innerHTML = "";

  array
    .filter(function (item) {
      let filtro = item.filtro.toString().toLowerCase();

      return filtro.includes(criterioFiltro.toLowerCase());
    })
    .map(function (elemento) {
      return tarjetaGrid(elemento, pathImg);
    });
  cargarEventosTarjetas(item);
}
