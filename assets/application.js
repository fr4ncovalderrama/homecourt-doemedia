/* Menu trigger */
document
  .getElementById("menu-toggle")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    document.getElementById("menu-mobile").classList.add("block");
  });

document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu-mobile");
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("close-menu");

  if (
    !menu.contains(event.target) &&
    !toggle.contains(event.target) &&
    !close.contains(event.target)
  ) {
    menu.classList.remove("block");
  }
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("menu-mobile").classList.remove("block");
});

/* Animations*/
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.2}s`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
});
