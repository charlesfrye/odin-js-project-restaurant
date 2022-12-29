import { erase } from "./util";
import Restaurant from "./img/restaurant.png";

const content = document.getElementById("content");

function makePage() {
  makeHeader(content);
  makeImage(content);
  makeMarketingCopy(content);
}

function makeHeader(node) {
  const h = document.createElement("h1");
  h.innerText = "Good Restaurant";
  node.appendChild(h);
}

function makeImage(node) {
  const img = document.createElement("img");
  img.src = Restaurant;
  node.appendChild(img);
}

function makeMarketingCopy(node) {
  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  content.appendChild(p);
}

makePage();

// "exports"
window.erase = erase;
window.makePage = makePage;
