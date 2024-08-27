
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonial-container');
    const grid = document.querySelector('.testimonial-grid');

    if (!container || !grid) {
        console.error("Element(s) not found");
        return;
    }

    let isMouseOver = false;
    let scrollSpeed = 2; 
    function autoScroll() {
        if (isMouseOver) {
            container.scrollLeft += scrollSpeed;
            if (container.scrollLeft >= grid.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    }

    container.addEventListener('mouseenter', () => {
        isMouseOver = true;``
    });

    container.addEventListener('mouseleave', () => {
        isMouseOver = false;
    });

    autoScroll();
});

document.getElementById('learnMore').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('builds').offsetTop,
        behavior: 'smooth'
    });
});
document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = '#contact';
});
