const toggleBtn = document.getElementById("mode-toggle");
const buttons = document.querySelectorAll(".wish-btn");
const popup = document.getElementById("scripture-popup");
const text = document.getElementById("scripture-text");

function showPage2() {
  document.getElementById("page-2").classList.remove("hidden");

  confetti({
    particleCount: 1000,
    spread: 300,
    origin: { y: 0.5 },
  });
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    text.innerText = btn.dataset.scripture;
    popup.classList.remove("hidden");
  });
}

function closePopup() {
  popup.classList.add("hidden");
}
