import { estiramientos } from "./pages/estiramientos.js";
import { inicio as init } from "./pages/inicio.js";
import { item, menu } from "./components/menu-hamburguesa.js";
import { removeChild } from "./components/remove-child.js";

const d = document;

function inicio() {
  removeChild();
  eventos();
  init();
}

function eventos() {
  d.querySelector(".bpmco").addEventListener("click", () => init());
  d.querySelector(".sport").addEventListener("click", () => init());
  d.getElementById("menuContainer").addEventListener("click", () => menu());
  d.querySelector(".menu").addEventListener("click", () => item());
  d.getElementById("inicio").addEventListener("click", () => init());
  d.getElementById("estiramientos").addEventListener("click", () =>
    estiramientos()
  );
}

inicio();
