import { contenidoIntroduccion } from "../assets/introduccion-contenido.js";
import { quitarHijos } from "../components/quitar-hijos.js";

const d = document;
const pathImg = "images/inicio/principal/";
const pathImgAutor = "images/inicio/autores/";
const titulo = "Bienvenidos";
const textoInicio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non maximus diam. Fusce sagittis augue in mi elementum accumsan. Quisque vulputate velit non leo facilisis accumsan. Aenean gravida tortor id scelerisque elementum.";

let ir = Math.floor(Math.random() * contenidoIntroduccion.length);

export function inicio() {
  quitarHijos("root");
  crearContenedores();
}

function crearContenedores() {
  let img = d.createElement("img");
  img.classList.add("introduccion-img");
  img.src = pathImg + contenidoIntroduccion[ir].imagen;
  img.setAttribute("alt", "Bienvenidos");

  let contenedorTexto = d.createElement("div");
  contenedorTexto.classList.add("introduccion-contenedor-texto");

  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("introduccion-contenedor-principal");

  contenedorPrincipal.appendChild(img);
  contenedorPrincipal.appendChild(contenedorTexto);

  d.getElementById("root").appendChild(contenedorPrincipal);

  cargarTextos(contenedorTexto);
}

function cargarTextos(contenedor) {
  let h2 = d.createElement("h2");
  let textoTitulo = d.createTextNode(titulo);
  h2.appendChild(textoTitulo);

  let p1 = d.createElement("p");
  let textoContenido = d.createTextNode(textoInicio);
  p1.appendChild(textoContenido);

  contenedor.appendChild(h2);
  contenedor.appendChild(p1);
  mensajes(contenedor);
}

function mensajes(contenedor) {
  let mensaje = d.createTextNode('"' + contenidoIntroduccion[ir].mensaje + '"');
  let p = d.createElement("p");
  p.classList.add("inicio-mensaje");
  p.appendChild(mensaje);

  let div = d.createElement("div");
  div.classList.add("inicio-contenedor-mensaje");
  div.appendChild(p);

  contenedor.appendChild(div);
  autores(contenedor);
}

function autores(contenedor) {
  let autor = d.createTextNode(contenidoIntroduccion[ir].autor);
  let imgAutor = d.createElement("img");
  imgAutor.src = pathImgAutor + contenidoIntroduccion[ir].imagenAutor;
  imgAutor.classList.add("inicio-imagen-autor");

  let b = d.createElement("b");
  b.classList.add("inicio-autor");
  b.appendChild(autor);

  let div = d.createElement("div");
  div.classList.add("inicio-contenedor-autor");
  div.appendChild(b);
  div.appendChild(imgAutor);

  contenedor.appendChild(div);
}
