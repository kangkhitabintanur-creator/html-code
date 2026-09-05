document.addEventListener("DOMContentLoaded", () => {
    
    // ১. টাইপরাইটার অ্যানিমেশন (Typewriter Effect)
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const textArray = [
            "Web Designer & Front-End Developer",
            "UI/UX Design Enthusiast",
            "Creative Web Developer"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = textArray[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            typingElement.classList.add('type-cursor');

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // ২. স্মুথ স্ক্রোলিং ও নেভবার অ্যাক্টিভ ট্র্যাকিং
    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ৩. স্মুথ স্ক্রোল রিভিল অ্যানিমেশন (Scroll Reveal Effect)
    const revealElements = document.querySelectorAll('.card, .project-card, .tool-item, .stat-card, .step, h2, h3');

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});