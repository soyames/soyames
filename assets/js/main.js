/* =========================
   TYPING EFFECT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  if (window.Typed) {
    new Typed(".typing", {
      strings: [
        "Interaction Designer",
        "Data Scientist & AI Practitioner",
        "Internet Governance & Policy Expert",
        "Full-Stack Developer",
        "Research-Oriented Technologist",
        "Prospective PhD Researcher"
      ],
      typeSpeed: 70,
      backSpeed: 35,
      loop: true
    });
  }
});

/* =========================
   THEME TOGGLE
   ========================= */

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  const isDark = body.dataset.theme === "dark";
  body.dataset.theme = isDark ? "light" : "dark";

  if (icon) {
    icon.className = isDark ? "bx bx-moon" : "bx bx-sun";
  }

  try {
    localStorage.setItem("theme", body.dataset.theme);
  } catch (_) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("theme") || "light";
  } catch (_) {}

  document.body.dataset.theme = savedTheme;

  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = savedTheme === "dark" ? "bx bx-sun" : "bx bx-moon";
  }
});

/* =========================
   SMOOTH SCROLL (SAFE)
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    const offset = document.querySelector(".navbar")?.offsetHeight || 0;

    window.scrollTo({
      top: target.offsetTop - offset - 20,
      behavior: "smooth"
    });
  });
});

/* =========================
   SECTION FADE-IN
   ========================= */

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  sectionObserver.observe(section);
});

/* =========================
   PARTICLES (INLINE CONFIG)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // Safe particles initialization (NO interaction)
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 35, density: { enable: true, value_area: 900 } },
      color: { value: "#4f46e5" },
      shape: { type: "circle" },
      opacity: { value: 0.15 },
      size: { value: 2 },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: false },
        onclick: { enable: false }
      }
    },
    retina_detect: true
  });
} else {
  console.warn("particlesJS is not defined.");
}
});



/* =========================
   EXPERIENCE / SKILLS / CERTS ANIMATION
   ========================= */

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Experience
document.querySelectorAll(".experience-item").forEach(item => {
  fadeObserver.observe(item);
});

// Skills
document.querySelectorAll(".skill-category").forEach(skill => {
  fadeObserver.observe(skill);
});

// Certifications (stagger)
document.querySelectorAll(".certifications-list li").forEach((cert, i) => {
  cert.style.transitionDelay = `${i * 0.08}s`;
  fadeObserver.observe(cert);
});

/* =========================
   MOBILE NAV TOGGLE
   ========================= */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

/* =========================
   RESEARCH — STATIC CIRCLE
   ========================= */

const researchContent = document.querySelector(".research-content");

if (researchContent && window.innerWidth > 900) {
  const lists = researchContent.querySelectorAll("ul");

  lists.forEach((list, ringIndex) => {
    const items = list.querySelectorAll("li");
    const radius = ringIndex === 0 ? 260 : 380;
    const angleStep = (2 * Math.PI) / items.length;

    items.forEach((item, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}
