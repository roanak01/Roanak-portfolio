/* =========================================================
   ROANAK SINGH — PORTFOLIO INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     CURRENT YEAR
  ------------------------------------------------------- */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* -------------------------------------------------------
     SCROLL REVEAL
  ------------------------------------------------------- */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    /* Fallback for older browsers */

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* -------------------------------------------------------
     NAVIGATION — SMOOTH SCROLL
  ------------------------------------------------------- */

  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );


  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* -------------------------------------------------------
     SUBTLE MOUSE MOVEMENT FOR HERO ORBS
  ------------------------------------------------------- */

  const orbOne = document.querySelector(".orb-one");
  const orbTwo = document.querySelector(".orb-two");


  if (
    window.matchMedia("(pointer: fine)").matches &&
    orbOne &&
    orbTwo
  ) {

    window.addEventListener(
      "mousemove",
      (event) => {

        const x = (event.clientX / window.innerWidth - 0.5);
        const y = (event.clientY / window.innerHeight - 0.5);


        orbOne.style.transform =
          `translate(${x * 18}px, ${y * 18}px)`;


        orbTwo.style.transform =
          `translate(${x * -12}px, ${y * -12}px)`;

      },
      { passive: true }
    );

  }

});
