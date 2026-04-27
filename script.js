// ==========================================
// 1. THEME SWITCHER (Rotate 1 to 9)
// ==========================================
function changeTheme() {
    const body = document.body;
    let currentTheme = 0;

    // Check karein ke abhi konsi class lagi hui hai
    for (let i = 1; i <= 9; i++) {
        if (body.classList.contains(`theme-${i}`)) {
            currentTheme = i;
            body.classList.remove(`theme-${i}`);
            break;
        }
    }

    // Agli theme set karein (1 to 9)
    let nextTheme = (currentTheme % 9) + 1;
    body.classList.add(`theme-${nextTheme}`);
    
    // Save karein taake refresh par color na jaye
    localStorage.setItem('user-theme-class', `theme-${nextTheme}`);
}

// ==========================================
// 2. PAGE LOAD HANDLER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Theme Restore
    const savedClass = localStorage.getItem('user-theme-class');
    if (savedClass) {
        document.body.classList.add(savedClass);
    }

    // Animate Skill Progress Bars (For Skills Page)
    const progressBars = document.querySelectorAll('.skill-item');
    progressBars.forEach(item => {
        const percentElement = item.querySelector('.skill-info span:last-child');
        const bar = item.querySelector('.progress');
        if(percentElement && bar) {
            const percent = percentElement.innerText;
            bar.style.width = percent; 
        }
    });
});

// ==========================================
// 3. PRO-TASK MANAGER (For todo.html)
// ==========================================
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

if(addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
        if(taskInput.value.trim() !== "") {
            const li = document.createElement('li');
            li.innerHTML = `<span>✅ ${taskInput.value}</span> <button onclick="this.parentElement.remove()" style="background:none; border:none; color:red; cursor:pointer; float:right;">✖</button>`;
            li.style.padding = "10px";
            li.style.borderBottom = "1px solid #333";
            li.style.color = "#fff";
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
}

// ==========================================
// ==========================================
// 4. LIVE WEATHER AI (Working Version)
// ==========================================
const searchBtn = document.getElementById('searchBtn');

if(searchBtn) {
    searchBtn.addEventListener('click', () => {
        const city = document.getElementById('cityInput').value;
        const apiKey = "409da7fd73f1b34e0c421073d5719c5e"; // <-- Apni key yahan dalein
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        if(city.trim() !== "") {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if(data.cod === 200) {
                        document.getElementById('cityName').innerText = data.name;
                        document.getElementById('tempDisplay').innerText = Math.round(data.main.temp) + "°C";
                        document.getElementById('descDisplay').innerText = data.weather[0].description;
                        
                        // Icon change logic
                        const iconCode = data.weather[0].icon;
                        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                        document.getElementById('weatherIcon').innerHTML = `<img src="${iconUrl}" alt="weather">`;
                        
                        document.getElementById('weatherResult').classList.remove('weather-hide');
                        document.getElementById('weatherResult').style.display = "block";
                    } else {
                        alert("City not found! Please check the name.");
                    }
                })
                .catch(err => alert("Error fetching data. Check your internet or API key."));
        } else {
            alert("Please enter a city name!");
        }
    });
}

// ==========================================
// 5. WORKSPACE TEXT CHANGE (For work.html)
// ==========================================
function changeText() {
    const heading = document.getElementById("heading");
    if(heading) {
        heading.style.opacity = "0"; 
        setTimeout(() => {
            heading.innerText = "Hello Mahnoor! System Analysis Complete. 🚀";
            heading.style.color = "#00ffff";
            heading.style.opacity = "1";
        }, 300);
    }
}
