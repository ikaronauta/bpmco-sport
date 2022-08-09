import { calentamientos } from "../assets/calentamientos.js";

const d = document;

export function itemsCalentamiento() {
  calentamientos.map((calentamiento) => {
    let containerTitle = d.createElement("h1");
    let title = d.createTextNode(calentamiento.ejercicio);
    containerTitle.appendChild(title);

    let img = d.createElement("img");
    img.setAttribute("src", "./images/rutinas/base.png");

    let containerContent = d.createElement("p");
    let content = d.createTextNode(calentamiento.descripcion);
    containerContent.appendChild(content);

    let div = d.createElement("div");
    div.appendChild(containerTitle);
    div.appendChild(img);
    div.appendChild(containerContent);

    d.getElementById("gridRutinas").appendChild(div);
  });
}
