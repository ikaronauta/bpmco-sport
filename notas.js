let h2 = d.createElement("h2");
let tituloTarjeta = d.createTextNode(estiramientosData[0].nombre)
h2.appendChild(tituloTarjeta);

let img = d.createElement("img");
img.classList.add("estiramientos-imagen-tarjeta");
img.src = pathImg + estiramientosData[0].imagen;

let p = d.createElement("p");
let tags = d.createTextNode(estiramientosData[0].tags.join(", "));
p.appendChild(tags);

let contenedorTarjeta = d.createElement("div");
contenedorTarjeta.classList.add("estiramientos-contenedor-tarjeta");

contenedorTarjeta.appendChild(h2);
contenedorTarjeta.appendChild(img);
contenedorTarjeta.appendChild(tags);

d.getElementById("root").appendChild(contenedorTarjeta);