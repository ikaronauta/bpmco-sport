const d = document;

export function itemAtras(contenedor){
    let back = d.createElement("img");
    back.classList.add("atras");
    back.src = "images/icons/atras.png";
    back.setAttribute("alt", "Atras");

    contenedor.appendChild(back);
}