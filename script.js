const container = document.querySelector(".container");

const SQUARES = 800;

// Generate 800 squares
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    container.appendChild(square);
}


// Set random color
function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
}


// Remove color after 1 second
function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = "#1d1d1d";
    }, 1000);
}


// Generate random hex color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
