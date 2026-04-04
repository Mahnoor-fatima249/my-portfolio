// Function to update the heading text
function changeText() {
    const heading = document.getElementById("heading");
    if (heading) {
        heading.innerText = "Hello Mahnoor! Let's build something amazing. 🚀";
        heading.style.color = "#00ffff";
    }
}

// Function to generate random colors for the interactive UI
function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    const heading = document.getElementById("heading");
    const container = document.querySelector(".interactive-container");

    if (heading) {
        heading.style.color = randomColor;
    }
    if (container) {
        container.style.border = `1px solid ${randomColor}`;
    }
}
