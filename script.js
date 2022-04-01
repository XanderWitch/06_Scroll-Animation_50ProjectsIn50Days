const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {

        //getBoundingClientRect retunrs DOMRect object (rectangle) providing info about its size and position relative to the viewport
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}