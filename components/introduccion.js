const d = document;

export function introduccion() {
  let contenedorPrincipal = d.createElement("div");
  contenedorPrincipal.classList.add("introduccion-contenedor-principal");

  let tituloPrincipal = d.createElement("h1");
  let contenidoTituloPrincipal = d.createTextNode("Introducción");

  tituloPrincipal.appendChild(contenidoTituloPrincipal);
  contenedorPrincipal.appendChild(tituloPrincipal);

  let contenedorSecundario = d.createElement("div");
  // contenedorSecundario.classList;

  d.getElementById("root").appendChild(contenedorPrincipal);
}
