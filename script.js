const weddingDate = new Date("2026-08-14T15:30:00+03:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML = "<p>Этот день настал 🤍</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

updateCountdown();
setInterval(updateCountdown, 60000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const replyButton = document.getElementById("replyButton");
const replyText = document.getElementById("replyText");

replyButton.addEventListener("click", () => {
  replyText.classList.add("show");
  replyButton.textContent = "Будем ждать ваш ответ 🤍";
});