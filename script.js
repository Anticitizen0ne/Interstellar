const navBar = document.querySelector(".navbar")
const burgerMenu = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const galleryImages = document.querySelectorAll(".gallery-img")
const navTopBtn = document.querySelector(".navigate-top")

galleryImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.1)";
    })

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1.0)";
    })
})

burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    burgerMenu.classList.toggle("active")
})

navTopBtn.addEventListener("click", () => {
    navTopBtn.classList.remove("active")
})

let previousScrollPosition = window.scrollY;
window.onscroll = function() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition < previousScrollPosition) {
        navBar.style.top = 0;
        navTopBtn.classList.remove("active")
    } else {
        navBar.style.top = "-80px";
        navMenu.classList.remove("active");
        burgerMenu.classList.remove("active");
        navTopBtn.classList.add("active")
    }
    previousScrollPosition = currentScrollPosition;
}

const emailOne = document.querySelector(".email1")
const emailTwo = document.querySelector(".email2")
const emailOneBox = document.querySelector(".input-box1")
const emailTwoBox = document.querySelector(".input-box2")
const textField = document.querySelector(".text1")
const emailButton = document.querySelector(".email-btn")
const emailPattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/
const resetEmailValidation = () => {
    emailOneBox.classList.remove("valid", "invalid");
    emailTwoBox.classList.remove("valid", "invalid");
};

const formatCheck = () => {
    const emailOneValue = emailOne.value
    const emailPattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if (emailOneValue.match(emailPattern)) {
        emailTwo.disabled = false
        emailTwo.style.visibility = "visible"
    } else {
        emailTwo.disabled = true
        emailTwo.style.visibility = "hidden"
        emailTwo.value = ""
        resetEmailValidation()
        textField.textContent = ""
        emailButton.disabled = true
    }
}

emailOne.addEventListener("input", formatCheck);

const compareFields = () => {
    const emailOneValue = emailOne.value
    const emailTwoValue = emailTwo.value

    if (emailTwoValue === "" || emailOneValue === "") {
        textField.textContent = ""
        emailButton.disabled = true
        
    } else if (emailOneValue !== emailTwoValue) {
        textField.textContent = "Emails do not match"
        emailButton.disabled = true
        emailOneBox.classList.add("invalid")
        emailTwoBox.classList.add("invalid")
        emailOneBox.classList.remove("valid")
        emailTwoBox.classList.remove("valid")

    } else if (emailOneValue === emailTwoValue) {
        textField.textContent = "Emails are correct"
        emailButton.disabled = false
        emailOneBox.classList.add("valid")
        emailTwoBox.classList.add("valid")
        emailOneBox.classList.remove("invalid")
        emailTwoBox.classList.remove("invalid")
    } else {
        textField.textContent = ""
        emailButton.disabled = true
    }
}

emailTwo.addEventListener("input", compareFields)

const lightDarkBtn = document.getElementById("light-dark-switch")
const body = document.querySelector("body")
const heroLogo = document.querySelector(".hero-logo")

lightDarkBtn.addEventListener("click", () => {
    body.classList.toggle("light")

    if (body.classList.contains("light")) {
        lightDarkBtn.textContent = "Switch to dark mode"
        heroLogo.src = "./img/Interstellar-logo-lightmode.png"

    } else {
        lightDarkBtn.textContent = "Switch to light mode"
        heroLogo.src = "./img/Interstellar-logo.png"
    }
})

const emailForm = document.querySelector(".input-box2");

emailForm.addEventListener("submit", (event) => {
    event.preventDefault()
    textField.textContent = "Your email has been signed up"
    emailOne.value = ""
    emailTwo.value = ""
    emailOneBox.classList.remove("valid")
    emailTwoBox.classList.remove("valid")
    emailButton.disabled = true
    emailTwo.disabled = true
    emailTwo.style.visibility = "hidden"
})