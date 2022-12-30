import { erase, swapActiveTo } from "./util";
import Restaurant from "./img/restaurant.png";

function setup() {
  const selfNav = document.getElementById("menu");
  selfNav.addEventListener("click", () => makePage());
}

function makePage() {
  const content = document.getElementById("content");
  const selfNav = document.getElementById("menu");
  erase();
  makeHeader(content);
  makeMenu(content);
  swapActiveTo(selfNav);
}

function makeHeader(node) {
  const h = document.createElement("h1");
  h.innerText = "Menu";
  node.appendChild(h);
}

function makeMenu(node) {
  const entries = new Map([
    ["Garlic Bread", "$9.99"],
    ["Cheesy Garlic Bread", "$19.99"],
    ["Avocado Garlic Bread", "$29.99"],
  ]);

  for (const [dish, price] of entries) {
    const p = document.createElement("p");
    p.innerText = `${dish}: ${price}`;
    content.appendChild(p);
  }
}

export { setup };
