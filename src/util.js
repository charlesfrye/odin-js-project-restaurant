const content = document.getElementById("content");

function erase() {
  while (content.firstChild) {
    content.firstChild.remove();
  }
}

export { erase };
