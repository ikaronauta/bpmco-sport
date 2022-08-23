import { fortalecimientosData } from "../assets/fortalecimientos-data.js";
import { grid } from "../components/grid.js";
import { removeChild } from "../components/remove-child.js";

const d = document;
const pathImg = "images/fortalecimientos/tarjetas/";

export function fortalecimientos() {
  removeChild();
  grid(fortalecimientosData, pathImg, "fortalecimiento");
}
