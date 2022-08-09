import { introduccion } from "./components/introduccion.js";
import { item, menu } from "./components/menu-hamburguesa.js";
// import { removeChild } from "./components/remove-child.js";

const d = document;

function inicio() {
  // removeChild();
  eventos();
  introduccion();
}

function eventos() {
  d.getElementById("menuContainer").addEventListener("click", () => menu());
  d.querySelector(".menu").addEventListener("click", () => item());
}

inicio();
