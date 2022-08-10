const root = document.getElementById("root");

export function removeChild() {
  console.log(root.hasChildNodes());
  if (root.hasChildNodes()) root.childNodes[0].remove;
  debugger;
}
