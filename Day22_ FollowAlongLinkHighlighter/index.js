const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: window.scrollY + linkCoords.top,
    left: window.scrollX + linkCoords.left,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener('mouseover', highlightLink));
