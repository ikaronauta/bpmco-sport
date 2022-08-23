import { estiramientos } from "./pages/estiramientos.js";
import { inicio as init } from "./pages/inicio.js";
import { item, menu } from "./components/menu-hamburguesa.js";
import { removeChild } from "./components/remove-child.js";
import { fortalecimientos } from "./pages/fortalecimientos.js";
import { pausasActivas } from "./pages/pausas-activas.js";
import { opcionLateral } from "./components/opcion-lateral.js";

const d = document;

function inicio() {
  opcionLateral(
    null,
    "icono-lateral-principal",
    "icono-lateral-principal",
    "open"
  );
  removeChild();
  eventos();
  init();
}

function eventos() {
  d.querySelector(".bpmco").addEventListener("click", () => init());
  d.querySelector(".sport").addEventListener("click", () => init());
  d.getElementById("icono-lateral-principal").addEventListener("click", () =>
    menu()
  );
  d.querySelector(".menu").addEventListener("click", () => item());
  d.getElementById("inicio").addEventListener("click", () => init());
  d.getElementById("estiramientos").addEventListener("click", () =>
    estiramientos()
  );
  d.getElementById("fortalecimientos").addEventListener("click", () =>
    fortalecimientos()
  );
  d.getElementById("pausasActicvas").addEventListener("click", () =>
    pausasActivas()
  );
}

inicio();
