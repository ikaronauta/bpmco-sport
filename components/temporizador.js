const d = document;

export function temporizador() {
  if (d.getElementById("panel-temporizador")) {
    d.getElementById("panel-temporizador").remove();
  } else {
    let temporizador = d.createElement("div");
    temporizador.classList.add("temporizador");
    temporizador.setAttribute("id", "panel-temporizador");

    d.getElementById("contenedor-temporizador").appendChild(temporizador);
  }
}
