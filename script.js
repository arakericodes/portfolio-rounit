/* =========================
   1. SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   2. SCROLL PROGRESS BAR
========================= */
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
});


/* =========================
   3. REVEAL ANIMATION ON SCROLL
========================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


/* =========================
   4. HERO PARALLAX (FIXED)
   - ONLY BACKGROUND MOVES
========================= */
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;

  document.querySelector("#hero").style.backgroundPositionY =
    offset * 0.2 + "px";
});


/* =========================
   5. TESTIMONIAL AUTO SLIDER
========================= */
const track = document.querySelector(".testimonial-track");
const items = document.querySelectorAll(".testimonial");

let index = 0;

setInterval(() => {
  if (!track || items.length === 0) return;

  index++;

  if (index >= items.length) {
    index = 0;
  }

  const offset = -index * (items[0].offsetWidth + 20);
  track.style.transform = `translateX(${offset}px)`;
}, 3000);


/* =========================
   6. HAMBURGER MENU (MOBILE)
   - OPEN / CLOSE MENU
   - AUTO CLOSE ON LINK CLICK
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector("nav ul");
  const links = document.querySelectorAll("nav ul a");

  // Toggle menu
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Close menu when clicking a link
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});