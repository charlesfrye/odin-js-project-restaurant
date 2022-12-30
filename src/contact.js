import { erase, swapActiveTo } from "./util";

function setup() {
  const selfNav = document.getElementById("contact");
  selfNav.addEventListener("click", () => makePage());
}

function makePage() {
  const content = document.getElementById("content");
  const selfNav = document.getElementById("contact");
  erase();
  makeHeader(content);
  makeContactInfo(content);
  swapActiveTo(selfNav);
}

function makeHeader(node) {
  const h = document.createElement("h1");
  h.innerText = "Contact Us";
  node.appendChild(h);
}

function makeContactInfo(node) {
  const p = document.createElement("p");
  p.innerText = "Do not contact us, we are not a real restaurant.";

  content.appendChild(p);
}

export { setup };
