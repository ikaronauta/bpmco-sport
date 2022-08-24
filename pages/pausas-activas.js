import { quitarHijos } from "../components/quitar-hijos.js";

const d = document;

export function pausasActivas() {
  quitarHijos("root");
  proximamente();
}

function proximamente() {
  let img = d.createElement("img");
  img.classList.add("pausasActivas-imagen");
  img.src = "images/pausas-activas/proximamente.png";

  let div = d.createElement("div");
  div.classList.add("pausasActivas-contenedor-principal");
  div.appendChild(img);

  d.getElementById("root").appendChild(div);
}
