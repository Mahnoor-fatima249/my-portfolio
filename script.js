
// Mahnoor.dev - Interactive Features

function changeText() {
    const heading = document.getElementById("heading");
    if (heading) {
        heading.innerText = "Hello! Ready to build the future together?";
        heading.style.transition = "0.5s";
    }
}
// 1. Background Color Change karne ka function
function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    
    // Pure page ka background change hoga
    document.getElementById("page").style.backgroundColor = color;
}

// 2. Content ko Hide/Show (Toggle) karne ka function
function toggleWebsite() {
    let content = document.getElementById("main-content");
    let heading = document.getElementById("heading");

    // Agar content gayab hai, toh dikha do
    if (content.style.display === "none") {
        content.style.display = "block";
        heading.innerText = "Welcome Back, Mahnoor! ✨";
    } 
    // Agar content dikh raha hai, toh gayab kar do
    else {
        content.style.display = "none";
        heading.innerText = "Website Hidden! Click again to show. 🕵️‍♀️";
    }
}
