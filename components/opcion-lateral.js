const d = document;

export function opcionLateral(icono, id, clase1, clase2) {
  let icon = d.createElement("img");
  icon.classList.add(clase1);
  icon.classList.add(clase2);
  icon.setAttribute("alt", id);
  icon.src = icono;

  let conIcon = d.createElement("div");
  conIcon.classList.add("icono-contenedor");
  conIcon.setAttribute("id", id);
  conIcon.appendChild(icon);

  d.getElementById("opciones-laterales").appendChild(conIcon);
}
