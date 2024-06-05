const mobileHeader = document.querySelector("#mobile-header");
const mobileHeaderIcon = document.querySelector("#mobile-header-icon");
const options = document.querySelectorAll(".option");

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

document.addEventListener("DOMContentLoaded", function () {
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
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    updateCarousel();
});

let redirecionar = (link) => {
    if(confirm("Deseja mesmo sair da página?")){
        window.location.href = link;
    }
}