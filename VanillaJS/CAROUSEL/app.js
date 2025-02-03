const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const bubblesContainer = document.querySelector('.carousel-bubbles');

let counter = 1;
const size = carouselImages[0].clientWidth;

// Move to first image initially
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Generate bubbles dynamically
for (let i = 1; i < carouselImages.length - 1; i++) {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    if (i === counter) bubble.classList.add('active'); // Set first bubble as active
    bubble.setAttribute('data-index', i);
    bubblesContainer.appendChild(bubble);
}

// Function to update bubble indicators
const updateBubbles = () => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        bubble.classList.remove('active');
        if (index === counter - 1) {
            bubble.classList.add('active');
        }
    });
};

// Next button click event
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateBubbles();
});

// Prev button click event
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateBubbles();
});

// Infinite loop logic
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    updateBubbles();
});

// Click event for bubbles
document.querySelectorAll('.bubble').forEach((bubble) => {
    bubble.addEventListener('click', (e) => {
        counter = parseInt(e.target.getAttribute('data-index'));
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateBubbles();
    });
});
