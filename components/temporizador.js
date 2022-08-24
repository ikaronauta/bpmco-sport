const d = document;

let cronometro = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

let cero;

export function temporizador() {
  if (d.getElementById("panel-temporizador")) {
    clearInterval(cronometro);
    reiniciar();
    d.getElementById("panel-temporizador").remove();
  } else {
    let temporizador = d.createElement("div");
    temporizador.classList.add("temporizador");
    temporizador.setAttribute("id", "panel-temporizador");

    filaTemporizador(temporizador);
    filaBotones(temporizador);

    d.getElementById("contenedor-temporizador").appendChild(temporizador);

    eventos();
  }
}

function filaTemporizador(temporizador) {
  let contSegundos = d.createElement("div");
  contSegundos.classList.add("contenedor-datos");
  contSegundos.setAttribute("id", "contenedor-segundos");
  contSegundos.innerHTML = "00";

  let contMinutos = d.createElement("div");
  contMinutos.classList.add("contenedor-datos");
  contMinutos.setAttribute("id", "contenedor-minutos");
  contMinutos.innerHTML = "00";

  let contHoras = d.createElement("div");
  contHoras.classList.add("contenedor-datos");
  contHoras.setAttribute("id", "contenedor-horas");
  contHoras.innerHTML = "00";

  let filaTemporizador = d.createElement("div");
  filaTemporizador.classList.add("fila-temporizador");
  filaTemporizador.appendChild(contHoras);
  filaTemporizador.appendChild(contMinutos);
  filaTemporizador.appendChild(contSegundos);

  temporizador.appendChild(filaTemporizador);
}

function filaBotones(temporizador) {
  let play = d.createElement("img");
  play.src = "images/icons/play.png";
  play.classList.add("icono");

  let contBotonPlay = d.createElement("button");
  contBotonPlay.setAttribute("id", "play");
  contBotonPlay.classList.add("contenedor-boton");
  contBotonPlay.appendChild(play);

  let stop = d.createElement("img");
  stop.src = "images/icons/stop.png";
  stop.classList.add("icono");

  let contBotonStop = d.createElement("button");
  contBotonStop.setAttribute("id", "stop");
  contBotonStop.classList.add("contenedor-boton");
  contBotonStop.appendChild(stop);

  let refresh = d.createElement("img");
  refresh.src = "images/icons/refresh.png";
  refresh.classList.add("icono");

  let contBotonRefresh = d.createElement("button");
  contBotonRefresh.setAttribute("id", "reiniciar");
  contBotonRefresh.classList.add("contenedor-boton");
  contBotonRefresh.appendChild(refresh);

  let filaBotones = d.createElement("div");
  filaBotones.classList.add("fila-botones");
  filaBotones.appendChild(contBotonPlay);
  filaBotones.appendChild(contBotonStop);
  filaBotones.appendChild(contBotonRefresh);

  temporizador.appendChild(filaBotones);
}

function eventos() {
  d.getElementById("play").addEventListener("click", () => iniciar());
  d.getElementById("stop").addEventListener("click", () => detener());
  d.getElementById("reiniciar").addEventListener("click", () => reiniciar());
}

function iniciar() {
  d.getElementById("play").disabled = true;

  cronometro = setInterval(function () {
    if (minutos == 60) {
      minutos = 0;
      horas++;
      if (horas < 10) cero = "0";
      else cero = "";
      d.getElementById("contenedor-horas").innerHTML = cero + horas;
    }

    if (segundos == 60) {
      segundos = 0;
      minutos++;
      if (minutos < 10) cero = "0";
      else cero = "";
      d.getElementById("contenedor-minutos").innerHTML = cero + minutos;
    }

    segundos++;
    if (segundos < 10) cero = "0";
    else cero = "";
    d.getElementById("contenedor-segundos").innerHTML = cero + segundos;
  }, 1000);
}

function detener() {
  d.getElementById("play").disabled = false;
  clearInterval(cronometro);
}

function reiniciar() {
  d.getElementById("play").disabled = false;
  d.getElementById("contenedor-horas").innerHTML = "00";
  d.getElementById("contenedor-minutos").innerHTML = "00";
  d.getElementById("contenedor-segundos").innerHTML = "00";
  horas = 0;
  minutos = 0;
  segundos = 0;
}
