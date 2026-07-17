/* SIMAK International — site interactions */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

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

  function initPartners() {
    const rail = document.querySelector(".partner-rail");
    if (!rail || rail.dataset.duplicated) return;
    rail.innerHTML += rail.innerHTML;
    rail.dataset.duplicated = "true";
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

      const subject = encodeURIComponent(`Inquiry from ${name} — SIMAK International`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nOrganization: ${data.get("organization") || "—"}\nInterest: ${data.get("interest") || "—"}\n\n${message}`
      );
      window.location.href = `mailto:simakint@yahoo.com?subject=${subject}&body=${body}`;

      if (note) {
        note.textContent = "Opening your email client… Thank you for reaching out.";
        note.className = "form-note success";
      }
      form.reset();
    });
  }

  function initMotion() {
    if (!window.gsap || prefersReduced) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const heroItems = document.querySelectorAll(".hero-copy > * , .hero-visual");
    if (heroItems.length) {
      gsap.from(heroItems, {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all",
      });
    }

    document.querySelectorAll(".reveal").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".stat-value").forEach((el) => {
      const raw = el.textContent.trim();
      const match = raw.match(/^([^0-9]*)([0-9.]+)(.*)$/);
      if (!match) return;
      const prefix = match[1];
      const target = parseFloat(match[2]);
      const suffix = match[3];
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate() {
          const value = Number.isInteger(target) ? Math.round(obj.val) : obj.val.toFixed(0);
          el.textContent = `${prefix}${value}${suffix}`;
        },
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initIcons();
    initNav();
    initPartners();
    initContactForm();
    initMotion();
  });
})();
