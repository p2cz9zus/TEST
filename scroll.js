const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

  document.querySelectorAll(".nav-tab-button").forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offset = document.querySelector(".sticky-nav").offsetHeight;
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - offset, behavior: "smooth" });
      }
    });
  });
});
