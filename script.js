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
