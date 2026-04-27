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
