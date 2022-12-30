import "./style.css";
import * as home from "./home";
import * as menu from "./menu";
import * as contact from "./contact";

document.addEventListener("DOMContentLoaded", function () {
  home.setup();
  menu.setup();
  contact.setup();
});
