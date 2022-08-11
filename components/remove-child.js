const d = document;

export function removeChild() {
  if (d.getElementById("root").hasChildNodes()) d.getElementById("root").removeChild(d.getElementById("root").childNodes[0]);
}
