document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const yearEl = document.getElementById("year");

  /* =========================
     THEME
     ========================= */
  const applyTheme = (theme) => {
    body.dataset.theme = theme;
    if (themeIcon) {
      themeIcon.className = theme === "dark" ? "bx bx-sun" : "bx bx-moon";
    }
  };

  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        localStorage.setItem("theme", nextTheme);
      } catch (error) {}
    });
  }

  /* =========================
     TYPING EFFECT
     ========================= */
  if (window.Typed) {
    new Typed(".typing", {
      strings: [
        "researcher",
        "technologist",
        "Internet governance professional"
      ],
      typeSpeed: 55,
      backSpeed: 28,
      backDelay: 1600,
      loop: true
    });
  }

  /* =========================
     MOBILE NAV
     ========================= */
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navAnchors.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     SMOOTH SCROLL WITH OFFSET
     ========================= */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const navbar = document.querySelector(".navbar-custom");
      const offset = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });

  /* =========================
     ACTIVE NAV LINK ON SCROLL
     ========================= */
  const sections = document.querySelectorAll("section[id], header[id]");
  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      if (!id) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;
      const matchingLink = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (!matchingLink) return;

      if (scrollPosition >= top && scrollPosition < top + height) {
        document.querySelectorAll(".nav-links a").forEach((link) => link.classList.remove("active"));
        matchingLink.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  /* =========================
     REVEAL ON SCROLL
     ========================= */
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  /* =========================
     PARTICLES
     ========================= */
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 28,
          density: {
            enable: true,
            value_area: 900
          }
        },
        color: {
          value: body.dataset.theme === "dark" ? "#818cf8" : "#4f46e5"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.12
        },
        size: {
          value: 2.4,
          random: true
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 0.45,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }

  /* =========================
     FOOTER YEAR
     ========================= */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});