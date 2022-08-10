let contenedorPrincipal = d.createElement("div");
contenedorPrincipal.classList.add("introduccion-contenedor-principal");

let tituloPrincipal = d.createElement("h1");
let contenidoTituloPrincipal = d.createTextNode("Introducción");

tituloPrincipal.appendChild(contenidoTituloPrincipal);

let contenedorSecundario = d.createElement("div");
contenedorSecundario.classList.add("introduccion-contenedor-secundario");

let contenedorContenido = d.createElement("div");
contenedorContenido.classList.add("introduccion-contenedor-contenido");
let h2 = d.createElement("h2");
let tituloIntroduccion = d.createTextNode(contenidoIntroduccion[0].titulo);
let p = d.createElement("p");
let mensajeIntroduccion = d.createTextNode(contenidoIntroduccion[0].contenido);
h2.appendChild(tituloIntroduccion);
p.appendChild(mensajeIntroduccion);

contenedorContenido.appendChild(h2);
contenedorContenido.appendChild(p);

contenedorSecundario.appendChild(contenedorContenido);

contenedorPrincipal.appendChild(tituloPrincipal);
contenedorPrincipal.appendChild(contenedorSecundario);
d.getElementById("root").appendChild(contenedorPrincipal);
