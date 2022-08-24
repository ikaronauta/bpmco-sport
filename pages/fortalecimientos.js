import { fortalecimientosData } from "../assets/fortalecimientos-data.js";
import { grid } from "../components/grid.js";
import { quitarHijos } from "../components/quitar-hijos.js";

const d = document;
const pathImg = "images/fortalecimientos/tarjetas/";

export function fortalecimientos() {
  quitarHijos("root");
  grid(fortalecimientosData, pathImg, "fortalecimiento");
}
