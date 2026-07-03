document.addEventListener("DOMContentLoaded", function () {


    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;
            const icon = question.querySelector("span");

            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) item.style.display = "none";
            });

            document.querySelectorAll(".faq-question span").forEach(item => {
                if (item !== icon) item.textContent = "+";
            });

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "−";
            }

        });

    });

    /* ==========================
       Consultation Form
    ========================== */

    const form = document.getElementById("consultationForm");
    const thankYou = document.getElementById("thankYouMessage");

    if (form && thankYou) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            // GTM Data Layer
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "consultation_form_submitted"
            });

            form.style.display = "none";
            thankYou.style.display = "block";

        });

    }

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

});

