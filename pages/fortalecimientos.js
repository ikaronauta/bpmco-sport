import { fortalecimientosData } from "../assets/fortalecimientos-data.js";
import { cargarEventosTarjetas } from "../components/cargar-eventos-tarjetas.js";
import { grid } from "../components/grid.js";
import { removeChild } from "../components/remove-child.js";
import { fortalecimiento } from "./fortalecimiento.js";

const d = document;
const pathImg = "images/fortalecimientos/tarjetas/";

export function fortalecimientos() {
  removeChild();
  grid(fortalecimientosData, pathImg);
  cargarEventosTarjetas(fortalecimiento);
}
