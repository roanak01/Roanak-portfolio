// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in reveal on scroll
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

els.forEach((el) => io.observe(el));