// Navbar animation
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 5);
});

// Navbar progress bar
window.onscroll = () => {
  progressBar();
};

const progressBar = () => {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const pageScrolled = (winScroll / height) * 100;
  document.querySelector(".navbar__progress").style.width = pageScrolled + "%";
};

// Mouse icon indicator
window.addEventListener("scroll", () => {
  document
    .querySelector(".hero__scroll-downs")
    .classList.toggle("toggler", window.scrollY > 1);
});

// Drop nav
const dropNav = document.querySelector(".drop");

const dropShow = () => {
  dropNav.classList.toggle("shown");
  navbar.classList.toggle("drop-back");
};

const dropRemove = () => {
  dropNav.classList.remove("shown");
  navbar.classList.remove("drop-back");
};

// Burger animation
const burger = document.querySelector(".navbar__burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("clicked");
});

// Hero socials
window.addEventListener("scroll", () => {
  document
    .querySelector(".hero__socials")
    .classList.toggle("hero-scrolled", window.scrollY > 1);
});

// About counter animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-counter");

  elements.forEach(function (item) {
    item.counterAlreadyFired = false;
    item.counterSpeed = item.getAttribute("data-counter-time") / 20;
    item.counterTarget = +item.innerText;
    item.counterCount = 0;
    item.counterStep = item.counterTarget / item.counterSpeed;

    item.updateCounter = function () {
      item.counterCount = item.counterCount + item.counterStep;
      item.innerText = Math.ceil(item.counterCount);

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed);
      } else {
        item.innerText = item.counterTarget;
      }
    };
  });

  const isElementVisible = function isElementVisible(el) {
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = el.getBoundingClientRect().top + scroll;
    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };
    const bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    };
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
  };

  const handleScroll = function handleScroll() {
    elements.forEach(function (item, id) {
      if (true === item.counterAlreadyFired) return;
      if (!isElementVisible(item)) return;
      item.updateCounter();
      item.counterAlreadyFired = true;
    });
  };

  window.addEventListener("scroll", handleScroll);
});

// Popup
const popUpForm = document.querySelector(".pop-container__popup");
const backdrop = document.querySelector(".pop-container__backdrop");

const popUpShow = () => {
  popUpForm.classList.add("show");
  backdrop.classList.add("back-active");
};
const popUpRemove = () => {
  popUpForm.classList.remove("show");
  backdrop.classList.remove("back-active");
};

// Aos library
AOS.init({
  disable: false,
  duration: 450,
  easing: "ease-out",
});

// Loader animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("loaded");
    document.querySelector(".web-wrap").classList.add("web-open");
  }, 2630);
});
