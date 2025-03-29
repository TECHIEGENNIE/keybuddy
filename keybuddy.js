document.addEventListener("DOMContentLoaded", function() {
    let carousel = document.getElementById('carouselExample');
    let totalItems = document.querySelectorAll('.carousel-item').length;
    let progressContainer = document.getElementById('progressContainer');
    
    for (let i = 0; i < totalItems; i++) {
        let segment = document.createElement('div');
        segment.classList.add('progress-segment');
        if (i === 0) segment.classList.add('active');
        segment.dataset.index = i;
        progressContainer.appendChild(segment);
        
        segment.addEventListener('click', function() {
            let carouselInstance = new bootstrap.Carousel(carousel);
            carouselInstance.to(i);
        });
    }
    
    carousel.addEventListener('slid.bs.carousel', function (event) {
        let segments = document.querySelectorAll('.progress-segment');
        segments.forEach(seg => seg.classList.remove('active'));
        segments[event.to].classList.add('active');
    });
});