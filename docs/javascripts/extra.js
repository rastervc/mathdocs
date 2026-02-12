function updateMathScroll() {
    document.querySelectorAll('.katex-display').forEach(display => {
        const tag = display.querySelectorAll('.tag')[0];

        if (tag) {
            const equations = display.querySelectorAll('.base');
            const last = equations[equations.length - 1];

            const isOverflowing = last.getBoundingClientRect().right + 5 > tag.getBoundingClientRect().left;

            if (isOverflowing) {
                display.classList.add('math-scroll');
            } else {
                display.classList.remove('math-scroll');
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

    requestAnimationFrame(() => {
        updateMathScroll();
    });
});


window.addEventListener('resize', updateMathScroll);