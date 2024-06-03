document.addEventListener('DOMContentLoaded', function () {
    // Magic 8 Ball functionality
    const answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];

    const magic8ball = document.getElementById('magic8ball');
    const answerElement = document.getElementById('answer');

    magic8ball.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        answerElement.textContent = randomAnswer;
    });

    // Carousel functionality
    function initializeCarousel(carouselContainer, prevButton, nextButton) {
        let currentIndex = 0;
        const carousel = carouselContainer.querySelector('.carousel');
        const items = carouselContainer.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel() {
            const offset = -currentIndex * 100; // Adjust percentage as needed
            carousel.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        // Initialize carousel position
        updateCarousel();
    }

    const firstCarouselContainer = document.querySelector('.first-carousel');
    const firstPrevButton = document.querySelector('.first-prev');
    const firstNextButton = document.querySelector('.first-next');

    const secondCarouselContainer = document.querySelector('.second-carousel');
    const secondPrevButton = document.querySelector('.second-prev');
    const secondNextButton = document.querySelector('.second-next');

    const thirdCarouselContainer = document.querySelector('.third-carousel');
    const thirdPrevButton = document.querySelector('.third-prev');
    const thirdNextButton = document.querySelector('.third-next');

    // Initialize all carousels
    initializeCarousel(firstCarouselContainer, firstPrevButton, firstNextButton);
    initializeCarousel(secondCarouselContainer, secondPrevButton, secondNextButton);
    initializeCarousel(thirdCarouselContainer, thirdPrevButton, thirdNextButton);

    const requirementBoxes = document.querySelectorAll('.dropdown');

    requirementBoxes.forEach(box => {
        const header = box.querySelector('.dropdown-header');
        const content = box.querySelector('.dropdown-content');
        const toggleButton = header.querySelector('.toggle-button');

        header.addEventListener('click', function () {
            const isVisible = content.style.display === "block";
            content.style.display = isVisible ? "none" : "block";
            toggleButton.textContent = isVisible ? "+" : "-";
        });
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slideshow-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Initialize slideshow position
    showSlide(currentIndex);
});
