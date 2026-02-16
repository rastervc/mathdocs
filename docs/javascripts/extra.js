function rect(el) {
    const r = el.getBoundingClientRect();
    const container = el.closest('.scrollable-container');
    const containerScrollTop = container ? container.scrollTop : 0;
    const containerScrollLeft = container ? container.scrollLeft : 0;
    const adjustedRect = {
        ...r,
        top: r.top + containerScrollTop,
        left: r.left + containerScrollLeft,
        bottom: r.bottom + containerScrollTop,
        right: r.right + containerScrollLeft
    };
    return adjustedRect;
}

function updateMathScroll() {
    document.querySelectorAll('.katex-display').forEach(display => {
        const tag = display.querySelectorAll('.tag')[0];

        if (tag) {
            const equations = display.querySelectorAll('.base');
            const last = equations[equations.length - 1];
            const isOverflowing = rect(last).right + 5 > rect(tag).left;

            if (isOverflowing) {
                tag.classList.add('math-scroll');
            } else {
                tag.classList.remove('math-scroll');
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