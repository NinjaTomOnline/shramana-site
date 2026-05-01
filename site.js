const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.documentElement.classList.add("js-reveal");

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const marquee = document.querySelector(".monk-marquee div");
if (marquee && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  marquee.innerHTML += marquee.innerHTML;
}

const abilityFrame = document.querySelector("#ability-frame");
const abilityLabel = document.querySelector("#ability-label");
const abilityCopy = document.querySelector("#ability-copy");
const abilityButtons = document.querySelectorAll(".ability-chip");

abilityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    abilityButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    if (abilityFrame) abilityFrame.src = button.dataset.frame || abilityFrame.src;
    if (abilityLabel) abilityLabel.textContent = button.dataset.label || "";
    if (abilityCopy) abilityCopy.textContent = button.dataset.copy || "";
  });
});
