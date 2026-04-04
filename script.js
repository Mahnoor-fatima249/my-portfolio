/* --- 1. GLOBAL UI INTERACTION --- */
function changeText() {
    const heading = document.getElementById("heading");
    if (heading) {
        heading.innerText = "Hello Mahnoor! Let's build something amazing. 🚀";
        heading.style.color = "#00ffff";
    }
}

function changeColor() {
    const heading = document.getElementById("heading");
    const container = document.querySelector(".interactive-container");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    if (heading) heading.style.color = randomColor;
    if (container) container.style.border = `1px solid ${randomColor}`;
}

/* --- 2. WEATHER APP LOGIC --- */
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const cityInput = document.getElementById('cityInput');
        const resultDiv = document.getElementById('weatherResult');
        const city = cityInput.value.trim();
        
        if(city) {
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

/* --- 3. TO-DO LIST LOGIC --- */
const addTaskBtn = document.getElementById('addTaskBtn');
if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const taskValue = taskInput.value.trim();
        
        if (taskValue === '') {
            alert("Pehle kuch likho toh sahi! 😂");
            return;
        }

        const li = document.createElement('li');
        li.className = 'achievement-item task-item';
        li.innerHTML = `
            <span>✅ ${taskValue}</span>
            <button class="delete-btn">❌</button>
        `;

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });

    // Enter key support
    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
}
