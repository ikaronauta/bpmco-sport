import { removeChild } from "../components/remove-child.js";
import { estiramientosData } from "../assets/estiramientos-data.js";
import { grid } from "../components/grid.js";

const d = document;
const pathImg = "images/estiramientos/tarjetas/";

export function estiramientos() {
  removeChild();
  grid(estiramientosData, pathImg, "estiramiento");
}
