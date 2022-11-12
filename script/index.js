//////////nav button

const navBackground = document.querySelector(".navigation__background");
const navEl = document.querySelector(".navigation__nav");
const navButton = document.querySelector(".navigation__button");

navButton.addEventListener("click", () => {
  navBackground.classList.toggle("navigation__background--open");
  navEl.classList.toggle("navigation__nav--open");
  navButton.classList.toggle("navigation__opened");
});

// ///////////// navigation

const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      console.log(href);

      if (link.classList.contains("navigation__link")) {
        navBackground.classList.toggle("navigation__background--open");
        navEl.classList.toggle("navigation__nav--open");
        navButton.classList.toggle("navigation__opened");
      }

      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
