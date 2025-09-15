// Modal window
const modal = document.getElementById("modal");
const btn = document.getElementById("qaBtn");
const span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target === modal) {
    modal.style.display = "none";
  }
}

// Fade-in animation delay
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
  });
});
