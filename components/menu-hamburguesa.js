const d = document;

export function menu() {
  d.querySelector(".panel").classList.toggle("is-active");
  d.getElementById("icono-lateral-principal").classList.toggle("open");
  d.getElementById("icono-lateral-principal").classList.toggle("close");
}

export function item() {
  d.querySelector(".panel").classList.remove("is-active");
  d.getElementById("icono-lateral-principal").classList.toggle("open");
  d.getElementById("icono-lateral-principal").classList.toggle("close");
}
