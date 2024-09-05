document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');
    let intervalId;

    function moveNext() {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]);
    }

    function movePrev() {
        let items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    }

    function startAutoSlide() {
        intervalId = setInterval(moveNext, 10000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    next.addEventListener('click', function () {
        moveNext();
        stopAutoSlide();
        startAutoSlide();
    });

    prev.addEventListener('click', function () {
        movePrev();
        stopAutoSlide();
        startAutoSlide();
    });

    // Start auto-sliding
    startAutoSlide();
});







