import { quitarHijos } from "../components/quitar-hijos.js";
import { estiramientosData } from "../assets/estiramientos-data.js";
import { grid } from "../components/grid.js";

const d = document;
const pathImg = "images/estiramientos/tarjetas/";

export function estiramientos() {
  quitarHijos("root");
  grid(estiramientosData, pathImg, "estiramiento");
}
