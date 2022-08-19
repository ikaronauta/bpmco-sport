import { estiramiento } from "../pages/estiramiento.js";
import { fortalecimiento } from "../pages/fortalecimiento.js";

const d = document;

export function cargarEventosTarjetas(item) {
  let elementos = Array.from(d.querySelectorAll(".contenedor-tarjeta"));
  elementos.map(function (elemento) {
    elemento.addEventListener("click", function () {
      if (item == "estiramiento") estiramiento(elemento.id);
      if (item == "fortalecimiento") fortalecimiento(elemento.id);
    });
  });
}
