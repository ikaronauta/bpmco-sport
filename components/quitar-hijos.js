const d = document;

export function quitarHijos(elemento) {
  if (d.getElementById(elemento).hasChildNodes())
    d.getElementById(elemento).removeChild(
      d.getElementById(elemento).childNodes[0]
    );
  if (d.getElementById("back")) d.getElementById("back").remove();
}
