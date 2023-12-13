window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 260) { // Scroll Offset
        document.querySelector('.logo').classList.remove('hidden');
    } else {
        document.querySelector('.logo').classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle');
    const spendenText = document.getElementById('spendenText');

    // Beim Klick auf den Toggle-Button
    toggleButton.addEventListener('click', function () {
        if (spendenText.classList.contains('active')) {
            spendenText.classList.remove('active');
            toggleButton.classList.remove('active');
        } else {
            spendenText.classList.add('active');
            toggleButton.classList.add('active');
        }
    });
});