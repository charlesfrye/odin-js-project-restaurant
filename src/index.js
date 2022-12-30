import "./style.css";
import * as home from "./home";
import * as menu from "./menu";
import * as contact from "./contact";

const content = document.getElementById("content");

home.selfNav.addEventListener("click", (event) => home.makePage());
menu.selfNav.addEventListener("click", (event) => menu.makePage());
contact.selfNav.addEventListener("click", (event) => contact.makePage());

home.makePage();
