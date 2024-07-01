document.addEventListener("DOMContentLoaded", function() {
    const learnBtn = document.getElementById('learn-btn');
    const topBtn = document.getElementById('top-btn');

    learnBtn.addEventListener('click', () => {
        const scrollDistance = window.innerWidth < 480 ? 560 : 780;

        window.scrollBy({
            top: scrollDistance, 
            behavior: 'smooth'
        });
    });
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    });
});