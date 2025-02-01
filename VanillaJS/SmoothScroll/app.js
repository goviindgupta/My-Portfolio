const smoothScroll = (target, duration) => {
    var targetPosition = typeof target === 'number' ? target : document.querySelector(target)?.offsetTop;
    if (targetPosition === undefined) return; // Prevents errors if target is not found

    var startPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
        else window.scrollTo(0, targetPosition); // Ensures it stops exactly at the target
    };

    // Smooth easing function
    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

// ✅ Correct event listeners
var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click', function () {
    smoothScroll('.section2', 1000);
});

// ✅ Clicking on section2 now scrolls to the top (0 position)
section2.addEventListener('click', function () {
    smoothScroll(0, 1000); // Scrolls to the top of the page
});
