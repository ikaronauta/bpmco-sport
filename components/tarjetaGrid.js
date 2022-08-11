const d = document;

export function tarjetaGrid(elemento, pathImg) {
  let h2 = d.createElement("h2");
  let tituloTarjeta = d.createTextNode(elemento.nombre);
  h2.appendChild(tituloTarjeta);

  let img = d.createElement("img");
  img.classList.add("imagen-tarjeta");
  img.src = pathImg + elemento.imagenTarjeta;
  img.setAttribute("alt", elemento.nombre);

  let p = d.createElement("p");
  let tags = d.createTextNode(elemento.tags.join(", "));
  p.appendChild(tags);

  let contenedorTarjeta = d.createElement("div");
  contenedorTarjeta.classList.add("contenedor-tarjeta");
  contenedorTarjeta.setAttribute("id", elemento.id);

  contenedorTarjeta.appendChild(h2);
  contenedorTarjeta.appendChild(img);
  contenedorTarjeta.appendChild(tags);

  d.querySelector(".contenedor-grid").appendChild(contenedorTarjeta);
}
