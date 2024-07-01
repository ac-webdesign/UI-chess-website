document.addEventListener("DOMContentLoaded", function() {
    const learnBtn = document.getElementById('learn-btn');
    const topBtn = document.getElementById('top-btn');

    learnBtn.addEventListener('click', () => {
        window.scrollBy({
            top: 780, 
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