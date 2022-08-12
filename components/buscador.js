const d = document;

export function buscador() {
  let input = d.createElement("input");
  input.classList.add("buscador");
  input.setAttribute("placeholder", "Filtrar");
  input.setAttribute("id", "buscador");

  let contenedorinput = d.createElement("div");
  contenedorinput.classList.add("contenedor-buscador");
  contenedorinput.appendChild(input);

  return contenedorinput;
}
