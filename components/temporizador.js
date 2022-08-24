const d = document;

export function temporizador() {
  if (d.getElementById("panel-temporizador")) {
    d.getElementById("panel-temporizador").remove();
  } else {
    let contSegundos = d.createElement("div");
    contSegundos.classList.add("contenedor-datos");
    contSegundos.setAttribute("id", "contenedor-segundos");

    let contMinutos = d.createElement("div");
    contMinutos.classList.add("contenedor-datos");
    contMinutos.setAttribute("id", "contenedor-minutos");

    let contHoras = d.createElement("div");
    contHoras.classList.add("contenedor-datos");
    contHoras.setAttribute("id", "contenedor-horas");

    let filaTemporizador = d.createElement("div");
    filaTemporizador.classList.add("fila-temporizador");
    filaTemporizador.appendChild(contSegundos);
    filaTemporizador.appendChild(contMinutos);
    filaTemporizador.appendChild(contHoras);

    let play = d.createElement("img");
    play.src = "images/icons/play.png";
    play.classList.add("icono");

    let contBotonPlay = d.createElement("button");
    contBotonPlay.classList.add("contenedor-boton");
    contBotonPlay.appendChild(play);

    let stop = d.createElement("img");
    stop.src = "images/icons/stop.png";
    stop.classList.add("icono");

    let contBotonStop = d.createElement("button");
    contBotonStop.classList.add("contenedor-boton");
    contBotonStop.appendChild(stop);

    let refresh = d.createElement("img");
    refresh.src = "images/icons/refresh.png";
    refresh.classList.add("icono");

    let contBotonRefresh = d.createElement("button");
    contBotonRefresh.classList.add("contenedor-boton");
    contBotonRefresh.appendChild(refresh);

    let filaBotones = d.createElement("div");
    filaBotones.classList.add("fila-botones");
    filaBotones.appendChild(contBotonPlay);
    filaBotones.appendChild(contBotonStop);
    filaBotones.appendChild(contBotonRefresh);

    let temporizador = d.createElement("div");
    temporizador.classList.add("temporizador");
    temporizador.setAttribute("id", "panel-temporizador");
    temporizador.appendChild(filaTemporizador);
    temporizador.appendChild(filaBotones);

    d.getElementById("contenedor-temporizador").appendChild(temporizador);
  }
}
