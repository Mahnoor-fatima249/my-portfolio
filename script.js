// ==========================================
// 1. THEME SWITCHER
// ==========================================
function changeTheme() {
    const body = document.body;
    let currentTheme = 0;
    for (let i = 1; i <= 9; i++) {
        if (body.classList.contains(`theme-${i}`)) {
            currentTheme = i;
            body.classList.remove(`theme-${i}`);
            break;
        }
    }
    let nextTheme = (currentTheme % 9) + 1;
    body.classList.add(`theme-${nextTheme}`);
    localStorage.setItem('user-theme-class', `theme-${nextTheme}`);
}

// ==========================================
// 2. PAGE LOAD HANDLER (Theme & Skills)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const savedClass = localStorage.getItem('user-theme-class');
    if (savedClass) document.body.classList.add(savedClass);

    const progressBars = document.querySelectorAll('.skill-item');
    progressBars.forEach(item => {
        const percentElement = item.querySelector('.skill-info span:last-child');
        const bar = item.querySelector('.progress');
        if(percentElement && bar) {
            bar.style.width = percentElement.innerText; 
        }
    });
});

// ==========================================
// 3. TASK MANAGER (todo.html)
// ==========================================
const addTaskBtn = document.getElementById('addTaskBtn');
if(addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
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
// 4. WEATHER AI LOGIC (weather.html)
// ==========================================
const searchBtn = document.getElementById('searchBtn');
if(searchBtn) {
    searchBtn.addEventListener('click', () => {
        const city = document.getElementById('cityInput').value.trim();
        const apiKey = "66e85f2abdef70c3cfd70a6f2f67ef94"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        if(city !== "") {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if(data.cod === 200) {
                        document.getElementById('cityName').innerText = data.name;
                        document.getElementById('tempDisplay').innerText = Math.round(data.main.temp) + "°C";
                        document.getElementById('descDisplay').innerText = data.weather[0].description;
                        
                        const iconCode = data.weather[0].icon;
                        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                        document.getElementById('weatherIcon').innerHTML = `<img src="${iconUrl}" alt="weather">`;
                        
                        const resultDiv = document.getElementById('weatherResult');
                        resultDiv.style.display = "block";
                        resultDiv.classList.remove('weather-hide');
                    } else {
                        alert("City not found! Please check spelling.");
                    }
                })
                .catch(err => alert("Connection Error. Please check your internet."));
        } else {
            alert("Please enter a city name!");
        }
    });
}

// ==========================================
// 5. WORKSPACE TEXT CHANGE (work.html)
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
