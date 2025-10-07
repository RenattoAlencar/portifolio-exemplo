document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');


    if (slides.length === 0) {
        return;
    }

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');


    function showSlide(index) {

        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }

        slides.forEach(slide => {
            slide.style.display = 'none';
        });


        slides[slideIndex].style.display = 'block';
    }

    prevButton.addEventListener('click', function () {
        showSlide(slideIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(slideIndex + 1);
    });


    showSlide(slideIndex);
});