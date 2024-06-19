document.addEventListener('DOMContentLoaded', function () {
    // Carousel Initialization Function
    function initializeCarousel(carouselContainer, prevButton, nextButton) {
        let currentIndex = 0;
        const carousel = carouselContainer.querySelector('.carousel');
        const items = carouselContainer.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel() {
            const offset = -currentIndex * 100;
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

        // initialize carousel position
        updateCarousel();
    }

    // Initialize all carousels
    const carousels = [
        {container: '.first-carousel', prev: '.first-prev', next: '.first-next'},
        {container: '.second-carousel', prev: '.second-prev', next: '.second-next'},
        {container: '.third-carousel', prev: '.third-prev', next: '.third-next'},
        {container: '.fourth-carousel', prev: '.fourth-prev', next: '.fourth-next'}
    ];

    carousels.forEach(c => {
        const container = document.querySelector(c.container);
        const prevButton = document.querySelector(c.prev);
        const nextButton = document.querySelector(c.next);
        if (container && prevButton && nextButton) {
            initializeCarousel(container, prevButton, nextButton);
        }
    });

    // Dropdown Functionality
    const requirementBoxes = document.querySelectorAll('.dropdown');

    requirementBoxes.forEach(box => {
        const header = box.querySelector('.dropdown-header');
        const content = box.querySelector('.dropdown-content');
        const toggleButton = header.querySelector('.toggle-button');

        // Ensure content is initially hidden
        content.style.display = "none";

        header.addEventListener('click', function () {
            const isVisible = content.style.display === "block";
            content.style.display = isVisible ? "none" : "block";
            toggleButton.textContent = isVisible ? "+" : "-";
        });
    });

    // Slideshow Functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slideshow-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    function changeSlide(n) {
        currentIndex += n;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    }

    function autoSlide() {
        changeSlide(1);
    }

    showSlide(currentIndex);

    prevButton.addEventListener('click', function () {
        changeSlide(-1);
    });

    nextButton.addEventListener('click', function () {
        changeSlide(1);
    });

    // Automatic slideshow
    let intervalId = setInterval(autoSlide, 3000);

    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // Resume slideshow when mouse leaves slideshow container
    slideshowContainer.addEventListener('mouseleave', function () {
        intervalId = setInterval(autoSlide, 3000);
    });
});
