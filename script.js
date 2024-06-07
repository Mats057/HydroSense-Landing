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


///-------CONTATO

const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const msgtxt = document.getElementById("msgtxt")


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})

msgtxt.addEventListener("blur", () => {
  checkInputmsgtxt();
})

function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha o campo de nome!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputmsgtxt(){
  const msgtxtValue = msgtxt.value;

  if(msgtxtValue === ""){
    errorInput(msgtxt, "Escreva a mensagem.")
  }else{
    const formItem = msgtxt.parentElement;
    formItem.className = "form-content"
  }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputmsgtxt();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("EMAIL ENVIADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}