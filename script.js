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
// Weather App Logic
const searchBtn = document.getElementById('searchBtn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const city = document.getElementById('cityInput').value;
        const resultDiv = document.getElementById('weatherResult');
        
        if(city) {
            // Box ko show karne ke liye class badalna
            resultDiv.classList.remove('weather-hide');
            resultDiv.classList.add('weather-show');
            
            document.getElementById('cityName').innerText = city;
            document.getElementById('tempDisplay').innerText = "Temperature: 25°C";
            document.getElementById('descDisplay').innerText = "Condition: Sunny";
        } else {
            alert("Please enter a city name!");
        }
    });
}
// --- To-Do List Logic ---
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function() {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') {
            alert("Pehle kuch likho toh sahi! 😂");
            return;
        }

        // Create Task Item
        const li = document.createElement('li');
        li.className = 'achievement-item task-item';
        li.innerHTML = `
            <span>✅ ${taskValue}</span>
            <button class="delete-btn">❌</button>
        `;

        // Delete Functionality
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Clear Input
    });

    // Enter key support
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
}
