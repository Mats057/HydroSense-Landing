document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileHeader = document.querySelector("#mobile-header");
  const mobileHeaderIcon = document.querySelector("#mobile-header-icon");
  const options = document.querySelectorAll(".option");
  const logo = document.querySelector("#logo");

  logo.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Deseja mesmo sair da página?")) {
      window.location.href = logo.href;
    }
  });

  mobileHeaderIcon.addEventListener("click", () => {
    mobileHeader.classList.toggle("closed");
    mobileHeaderIcon.src = mobileHeader.classList.contains("closed")
      ? "images/burger-menu.svg"
      : "images/close-md.svg";
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      mobileHeader.classList.add("closed");
      mobileHeaderIcon.src = "images/burger-menu.svg";
    });
  });

  // Animação das sections
  const sections = document.querySelectorAll(".sections");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Remove observer after adding the class
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Carousel
  const carousel = document.querySelector(".carousel-inner");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  const slides = document.querySelectorAll(".carousel-inner img");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel();
});
