const d = document;

export function cargarEventosTarjetas(vista) {
  //   console.log(vista);
  let elementos = Array.from(d.querySelectorAll(".contenedor-tarjeta"));
  elementos.map(function (elemento) {
    elemento.addEventListener("click", function () {
      vista(elemento.id);
    });
  });
}
