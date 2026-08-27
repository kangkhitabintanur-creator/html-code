// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});