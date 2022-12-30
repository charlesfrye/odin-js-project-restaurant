import { erase, swapActiveTo } from "./util";

const content = document.getElementById("content");
const selfNav = document.getElementById("contact");

function makePage() {
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

export { makePage, selfNav };
