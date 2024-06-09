//carousel
document.addEventListener('DOMContentLoaded', function () {
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

    const firstCarouselContainer = document.querySelector('.first-carousel');
    const firstPrevButton = document.querySelector('.first-prev');
    const firstNextButton = document.querySelector('.first-next');

    const secondCarouselContainer = document.querySelector('.second-carousel');
    const secondPrevButton = document.querySelector('.second-prev');
    const secondNextButton = document.querySelector('.second-next');

    const thirdCarouselContainer = document.querySelector('.third-carousel');
    const thirdPrevButton = document.querySelector('.third-prev');
    const thirdNextButton = document.querySelector('.third-next');

    // initialize both carousels
    initializeCarousel(firstCarouselContainer, firstPrevButton, firstNextButton);
    initializeCarousel(secondCarouselContainer, secondPrevButton, secondNextButton);
    initializeCarousel(thirdCarouselContainer, thirdPrevButton, thirdNextButton);

    //dropdown
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
});
//slideshow
document.addEventListener('DOMContentLoaded', function () {
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

    // automatic slideshow
    const intervalId = setInterval(autoSlide, 3000); 

    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', function () {
        clearInterval(intervalId); 
    });

    // Resume slideshow when mouse leaves slideshow container
    slideshowContainer.addEventListener('mouseleave', function () {
        intervalId = setInterval(autoSlide, 3000); 
    });
});
