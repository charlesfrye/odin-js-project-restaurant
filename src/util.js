const allNavs = document.getElementsByClassName("nav");

function erase() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.firstChild.remove();
  }
}

function swapActiveTo(targetNav) {
  for (const nav of allNavs) {
    nav.classList.remove("active");
    nav.classList.add("inactive");
  }
  targetNav.classList.remove("inactive");
  targetNav.classList.add("active");
}

export { erase, swapActiveTo };
