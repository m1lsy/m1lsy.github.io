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
