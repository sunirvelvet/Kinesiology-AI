const text = "Fitness Pro";
const typingDelay = 100;
const cursorElement = document.getElementById("typing-cursor");
const textElement = document.getElementById("typing-text");

let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        textElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        cursorElement.style.left = textElement.offsetWidth + "px"; // Set cursor position
        setTimeout(type, typingDelay);
    } else {
        cursorElement.style.display = "none"; // Hide cursor after typing
    }
}

type();

export default type;
