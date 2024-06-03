const textElement = document.querySelector('.display-4');
const descriptionElement = document.querySelector('.lead');

const text = "Hendra Admaja";
const description = " | Student";

let index = 0;
let descriptionIndex = 0;

function type() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Speed of typing (milliseconds)
    } else {
        if (descriptionIndex < description.length) {
            descriptionElement.textContent += description.charAt(descriptionIndex);
            descriptionIndex++;
            setTimeout(type, 50); // Speed of typing (milliseconds)
        }
    }
}

type();
