window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 260) { // Scroll Offset
        document.querySelector('.logo').classList.remove('hidden');
    } else {
        document.querySelector('.logo').classList.add('hidden');
    }
});
// JavaScript, um den Text beim Klicken auf den Toggle-Button anzuzeigen bzw. zu verbergen
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById('toggle');
    var spendenText = document.querySelector('.spenden-text');

    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        spendenText.classList.toggle('active');
        toggleButton.classList.toggle('active');
        spendenText.style.display = spendenText.classList.contains('active') ? 'block' : 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const spendenText = document.getElementById('spendenText');

    toggleButton.addEventListener('click', function() {
        if (spendenText.style.display === 'none' || spendenText.style.display === '') {
            spendenText.style.display = 'block';
            toggleButton.classList.add('active');
        } else {
            spendenText.style.display = 'none';
            toggleButton.classList.remove('active');
        }
    });
});