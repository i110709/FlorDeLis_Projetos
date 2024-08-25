document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const totalImages = images.length / 4; // We have double the images for looping
    let currentIndex = 2; // Starting at the middle image
    const delayBetweenCycles = 3000; // 3 seconds

    function updateSlide() {
        currentIndex++;
        const offset = currentIndex % totalImages;

        // Apply the transformation to slide
        slides.style.transform = `translateX(-${offset * 275}px)`;

        // Reset to the initial set of slides if at the end
        if (currentIndex === totalImages * 2 - 2) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.transform = `translateX(-${2 * 275}px)`;
                currentIndex = 2;
                setTimeout(() => {
                    slides.style.transition = 'transform 1s ease';
                    updateSlide();
                }, delayBetweenCycles);
            }, delayBetweenCycles);
        } else {
            setTimeout(updateSlide, delayBetweenCycles);
        }
    }

    setTimeout(updateSlide, delayBetweenCycles);
});
