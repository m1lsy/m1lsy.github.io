document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex].style.display = 'block';
    }

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });

    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });

    //slideshow
    function autoSlide() {
        changeSlide(1);
    }

    setInterval(autoSlide, 2000); // Change slide every 3 seconds

    // script.js
    let currentIndex = 0;

    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 50; // Change to 50 to match the item width percentage
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Initialize carousel position
    updateCarousel();
});
