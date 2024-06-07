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


  //-------CONTATO-MODAL-------//
const modal = document.getElementById("contato");
const abrirModalBtn = document.getElementById("abrirModal");
const closeModalBtn = document.getElementById("fecharModal");
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const msgtxt = document.getElementById("msgtxt")
let msgEnviada = false;
const closeModal = () => {
  modal.setAttribute("closing", "");
  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
}

abrirModalBtn.addEventListener("click", function () {
  modal.showModal();
});

closeModalBtn.addEventListener("click", function () {
  closeModal();
});


modal.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInput(email);
})

username.addEventListener("blur", () => {
  checkInput(username);
})

msgtxt.addEventListener("blur", () => {
  checkInput(msgtxt);
})


function checkInput(input){
  if(input.value === "" || input.value === null){
    if(input.id === "username"){
      errorInput(input, "Preencha o campo de nome!")
    }else if(input.id === "email"){
      errorInput(email, "O email é obrigatório.")
    }else if(input.id === "msgtxt"){
      errorInput(msgtxt, "Escreva a mensagem.")
    }
  }else{
    const formItem = input.parentElement;
    formItem.className = "form-content"
  }
}



function checkForm(){
  checkInput(email);
  checkInput(username);
  checkInput(msgtxt);

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    if(msgEnviada){
      alert("Você já enviou uma mensagem!")
    }else{
    alert("Mensagem enviada com sucesso!")
    msgEnviada = true;
    }
    form.reset();
    closeModal();
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

});


