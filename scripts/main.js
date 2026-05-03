const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 2,
      "absolute-stroke-width": true
    }
  });
}

if (window.gsap && !prefersReducedMotion) {
  gsap.defaults({
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".brand", {
    autoAlpha: 0,
    y: -10,
    duration: 0.55
  });

  gsap.from(".primary-nav a", {
    autoAlpha: 0,
    y: -8,
    duration: 0.5,
    stagger: 0.055,
    delay: 0.08
  });

  gsap.from([".eyebrow", ".hero h1", ".role", ".hero-text", ".work-link"], {
    autoAlpha: 0,
    y: 20,
    stagger: 0.08,
    delay: 0.16
  });

  gsap.from(".avatar-frame", {
    autoAlpha: 0,
    x: 22,
    scale: 0.98,
    delay: 0.34
  });

  gsap.from(".focus-item", {
    autoAlpha: 0,
    y: 18,
    stagger: 0.08,
    delay: 0.58
  });

  const avatar = document.querySelector(".avatar-frame img");
  const hero = document.querySelector(".hero");

  if (avatar && hero) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      gsap.to(avatar, {
        x: x * 12,
        y: y * 10,
        rotate: x * 1.5,
        duration: 0.7,
        ease: "power3.out"
      });
    });

    hero.addEventListener("pointerleave", () => {
      gsap.to(avatar, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.7,
        ease: "power3.out"
      });
    });
  }
}
