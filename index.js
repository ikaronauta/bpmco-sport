import { estiramientos } from "./pages/estiramientos.js";
import { inicio as init } from "./pages/inicio.js";
import { item, menu } from "./components/menu-hamburguesa.js";
import { quitarHijos } from "./components/quitar-hijos.js";
import { fortalecimientos } from "./pages/fortalecimientos.js";
import { pausasActivas } from "./pages/pausas-activas.js";
import { opcionLateral } from "./components/opcion-lateral.js";
import { temporizador } from "./components/temporizador.js";

const d = document;

function inicio() {
  opcionLateral(null, "icono-lateral", "icono-lateral", "open");
  opcionLateral(
    "images/icons/temporizador.png",
    "temporizador",
    "icono-lateral",
    null
  );
  quitarHijos("root");
  eventos();
  init();
}

function eventos() {
  d.querySelector(".bpmco").addEventListener("click", () => init());
  d.querySelector(".sport").addEventListener("click", () => init());
  d.getElementById("icono-lateral").addEventListener("click", () => menu());
  d.querySelector(".menu").addEventListener("click", () => item());
  d.getElementById("temporizador").addEventListener("click", function () {
    temporizador();
  });
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
