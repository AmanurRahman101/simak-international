/* SIMAK International - site interactions (vanilla JS only) */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initNav() {
    const shell = document.querySelector(".nav-shell");
    const toggle = document.querySelector(".nav-toggle");
    if (!shell || !toggle) return;

    toggle.addEventListener("click", () => {
      const open = shell.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    shell.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        shell.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const note = document.getElementById("form-note");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        if (note) {
          note.textContent = "Please fill in your name, email, and message.";
          note.className = "form-note error";
        }
        return;
      }

      const subject = encodeURIComponent("Inquiry from " + name + " - SIMAK International");
      const body = encodeURIComponent(
        "Name: " +
          name +
          "\nEmail: " +
          email +
          "\nOrganization: " +
          (data.get("organization") || "-") +
          "\nInterest: " +
          (data.get("interest") || "-") +
          "\n\n" +
          message
      );
      window.location.href = "mailto:simakint@yahoo.com?subject=" + subject + "&body=" + body;

      if (note) {
        note.textContent = "Opening your email client. Thank you for reaching out.";
        note.className = "form-note success";
      }
      form.reset();
    });
  }

  function initYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", () => {
    initYear();
    initNav();
    initReveal();
    initContactForm();
  });
})();
