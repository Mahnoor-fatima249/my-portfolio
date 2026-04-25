/* --- 1. GLOBAL UI & THEME INTERACTION --- */
function changeText() {
    const heading = document.getElementById("heading");
    if (heading) {
        // Aapke professional name ke saath personalized greeting
        heading.innerText = "Hello Mahnoor! Your AI projects are looking great. 🚀";
        heading.style.color = "#00ffff";
        heading.style.textShadow = "0 0 10px #00ffff";
    }
}

function changeColor() {
    const heading = document.getElementById("heading");
    const container = document.querySelector(".interactive-container");
    
    // Professional color palette for dark themes
    const colors = ['#00ffff', '#ff00cc', '#33ff33', '#ffcc00', '#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (heading) heading.style.color = randomColor;
    if (container) {
        container.style.border = `2px solid ${randomColor}`;
        container.style.boxShadow = `0 0 15px ${randomColor}`;
    }
}

/* --- 2. WEATHER APP LOGIC (API READY) --- */
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const cityInput = document.getElementById('cityInput');
        const resultDiv = document.getElementById('weatherResult');
        const city = cityInput.value.trim();
        
        if(city) {
            resultDiv.classList.remove('weather-hide');
            resultDiv.classList.add('weather-show');
            
            // Logic for your OpenWeatherMap integration 
            document.getElementById('cityName').innerText = city;
            document.getElementById('tempDisplay').innerText = "Temperature: 25°C"; // Placeholder
            document.getElementById('descDisplay').innerText = "Condition: Clear Skies"; 
        } else {
            alert("Mahi, pehle city ka naam toh likho! 🌍");
        }
    });
}

/* --- 3. PRO-TASK MANAGER (TO-DO LIST) --- */
const addTaskBtn = document.getElementById('addTaskBtn');
if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const taskValue = taskInput.value.trim();
        
        if (taskValue === '') {
            alert("Mahi, task likhna bhool gayi aap? 😂");
            return;
        }

        const li = document.createElement('li');
        li.className = 'achievement-item task-item';
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        
        li.innerHTML = `
            <span>🔹 ${taskValue}</span>
            <button class="view-btn delete-btn" style="padding: 5px 10px; background: #ff4d4d; border: none; cursor: pointer;">Delete</button>
        `;

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 300);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });

    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTaskBtn.click();
    });
}

/* --- 4. FORM LOGIC (CONTACT/LOGIN) --- */
const loginBtn = document.querySelector('.btn-login');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        console.log("Mahi, authentication system is ready!");
    });
}
