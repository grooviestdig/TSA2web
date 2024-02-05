function change(color) {
    const boxCont = document.getElementById("box-cont");
    boxCont.style.borderColor = color;
    boxCont.style.animation = 'none';  // Reset the animation
    void boxCont.offsetWidth;  // Trigger reflow
    boxCont.style.animation = 'fall 1s ease-out forwards';  // Reapply the animation
}