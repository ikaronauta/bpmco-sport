const d = document;

export function menu() {
  d.querySelector(".panel").classList.toggle("is-active");
  d.getElementById("menu-icon").classList.toggle("open");
  d.getElementById("menu-icon").classList.toggle("close");
}

export function item() {
  d.querySelector(".panel").classList.remove("is-active");
  d.getElementById("menu-icon").classList.toggle("open");
  d.getElementById("menu-icon").classList.toggle("close");
}
