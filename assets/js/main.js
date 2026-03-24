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
     PHOTO CAROUSEL
     Replace these image paths with your own.
     Use JPG / PNG / WebP ideally.
     ========================= */
  const photoItems = [
    {
      src: "assets/img/highlights/highlight-1.jpg",
      alt: "Sapiens project",
      title: "Consortium meeting highlight",
      caption: "Sapiens EU-funded project - Consortium meeting in Graz."
    },
    {
      src: "assets/img/highlights/highlight-2.jpg",
      alt: "Citizen dialogue highlight",
      title: "Community and youth leadership",
      caption: "Citizen dialogue session in Ouagadougou."
    },
    {
      src: "assets/img/highlights/highlight-3.jpg",
      alt: "Technical.",
      title: "Troubleshooting and technical support",
      caption: "Onsite Troubleshooting Koudougou"
    },
    
    {
      src: "assets/img/highlights/highlight-3b.jpg",
      alt: "Consortium meeting highlight",
      title: "Consortium meeting highlight",
      caption: "GreenWB consortium meeting in Graz."
    },
      
    {
      src: "assets/img/highlights/highlight-3c.jpg",
      alt: "Internet Governance Forum Highlight",
      title: "Internet Governance Forum Highlight",
      caption: "Benin Youth IGF."
    },
      
    {
      src: "assets/img/highlights/highlight-3d.jpg",
      alt: "Internet Governance Forum Highlight",
      title: "Internet Governance Forum Highlight",
      caption: "Benin Youth IGF."
    },
    {
      src: "assets/img/highlights/highlight-4.jpg",
      alt: "#SHU2024",
      title: "Consortium and Workshops",
      caption: "EU project ENNE+ consortium meeting and #SHU2024 in Bevagna, Italy."
    },
    
    {
      src: "assets/img/highlights/highlight-4a.jpg",
      alt: "internet governance forum highlight",
      title: "internet governance forum highlight",
      caption: "Speaker at IGF2024 in Riyadh, Saoudi Arabia."
    },
    {
      src: "assets/img/highlights/highlight-5.jpg",
      alt: "Internet Governance Forum Highlight",
      title: "Internet Governance Forum Highlight",
      caption: "IGF2025 in Oslo, Norway."
    }
    ,
    {
      src: "assets/img/highlights/highlight-5b.jpg",
      alt: "Internet Governance Forum Highlight",
      title: "Internet Governance Forum Highlight",
      caption: "IGF2025 in Oslo, Norway."
    }
    ,
    {
      src: "assets/img/highlights/highlight-6.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "Showcasing the Catalyst Project- An EU Funded project fostering institutional collaborations."
    }
    ,
    {
      src: "assets/img/highlights/highlight-7.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "Showcasing the Catalyst Project- An EU Funded project fostering institutional collaborations."
    }
    ,
     {
      src: "assets/img/highlights/highlight-8.jpg",
      alt: "FuturENG - Malta",
      title: "project management and coordination",
      caption: "FuturENG project Consortium meeting and working session in Malta."
    },
    {
      src: "assets/img/highlights/highlight-9.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "Organizer and Speaker at the Benin Youth IGF 2024"
    }
    ,
    {
      src: "assets/img/highlights/highlight-10.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "Organizer and Speaker at the Benin Youth IGF 2024"
    }
    ,
    {
      src: "assets/img/highlights/highlight-11.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "EU Funded Project - ENCORE - Consortium meeting and working session in Laos."
    }
     ,
    {
      src: "assets/img/highlights/highlight-12.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "EU Funded Project - ENCORE - Consortium meeting and working session in Laos."
    }
     ,
    {
      src: "assets/img/highlights/highlight-13.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "EU Funded Project - ENCORE - Consortium meeting and working session in Laos."
    }
     ,
    {
      src: "assets/img/highlights/highlight-14.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "International Startup Festival - In Neu-ulm, Germany."
    }
    ,
    {
      src: "assets/img/highlights/highlight-15.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "International Startup Festival - In Neu-ulm, Germany."
    }
    ,
    {
      src: "assets/img/highlights/highlight-16.jpg",
      alt: "Professional networking highlight",
      title: "Professional and institutional engagement",
      caption: "International Startup Festival - In Neu-ulm, Germany."
    }
    
  ];

  const photoStage = document.getElementById("photo-stage");
  const photoDots = document.getElementById("photo-dots");
  const photoPrev = document.getElementById("photo-prev");
  const photoNext = document.getElementById("photo-next");
  const photoTitle = document.getElementById("photo-title");
  const photoCaption = document.getElementById("photo-caption");

  let currentPhoto = 0;
  let photoInterval = null;

  const normalizeIndex = (index) => {
    return (index + photoItems.length) % photoItems.length;
  };

  const buildPhotoCarousel = () => {
    if (!photoStage || !photoDots || !photoTitle || !photoCaption || photoItems.length === 0) return;

    photoStage.innerHTML = "";
    photoDots.innerHTML = "";

    photoItems.forEach((item, index) => {
      const slide = document.createElement("article");
      slide.className = "photo-slide";
      slide.setAttribute("data-index", index);

      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt || item.title || `Photo ${index + 1}`;
      image.loading = index === 0 ? "eager" : "lazy";

      slide.appendChild(image);
      photoStage.appendChild(slide);

      const dot = document.createElement("button");
      dot.className = "photo-dot";
      dot.setAttribute("aria-label", `Go to photo ${index + 1}`);
      dot.addEventListener("click", () => {
        currentPhoto = index;
        renderPhotoCarousel();
        restartPhotoAutoplay();
      });

      photoDots.appendChild(dot);
    });

    renderPhotoCarousel();
  };

  const renderPhotoCarousel = () => {
    const slides = Array.from(document.querySelectorAll(".photo-slide"));
    const dots = Array.from(document.querySelectorAll(".photo-dot"));

    slides.forEach((slide, index) => {
      slide.classList.remove("active", "left", "right", "hidden-left", "hidden-right");

      if (index === currentPhoto) {
        slide.classList.add("active");
      } else if (index === normalizeIndex(currentPhoto - 1)) {
        slide.classList.add("left");
      } else if (index === normalizeIndex(currentPhoto + 1)) {
        slide.classList.add("right");
      } else if (index < currentPhoto) {
        slide.classList.add("hidden-left");
      } else {
        slide.classList.add("hidden-right");
      }
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPhoto);
    });

    if (photoTitle) {
      photoTitle.textContent = photoItems[currentPhoto].title;
    }

    if (photoCaption) {
      photoCaption.textContent = photoItems[currentPhoto].caption;
    }
  };

  const nextPhoto = () => {
    currentPhoto = normalizeIndex(currentPhoto + 1);
    renderPhotoCarousel();
  };

  const prevPhotoFn = () => {
    currentPhoto = normalizeIndex(currentPhoto - 1);
    renderPhotoCarousel();
  };

  const startPhotoAutoplay = () => {
    if (photoItems.length <= 1) return;
    photoInterval = setInterval(nextPhoto, 1500);
  };

  const stopPhotoAutoplay = () => {
    if (photoInterval) {
      clearInterval(photoInterval);
      photoInterval = null;
    }
  };

  const restartPhotoAutoplay = () => {
    stopPhotoAutoplay();
    startPhotoAutoplay();
  };

  if (photoStage && photoItems.length > 0) {
    buildPhotoCarousel();

    if (photoPrev) {
      photoPrev.addEventListener("click", () => {
        prevPhotoFn();
        restartPhotoAutoplay();
      });
    }

    if (photoNext) {
      photoNext.addEventListener("click", () => {
        nextPhoto();
        restartPhotoAutoplay();
      });
    }

    photoStage.addEventListener("mouseenter", stopPhotoAutoplay);
    photoStage.addEventListener("mouseleave", startPhotoAutoplay);

    startPhotoAutoplay();
  }

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