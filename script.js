function changeTheme() {
    const body = document.body;
    // Hum 1 se 9 tak colors rotate karenge jo aapki CSS mein hain
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
    
    // Save karein taake page refresh par color na jaye
    localStorage.setItem('user-theme-class', `theme-${nextTheme}`);
}

// Page load hone par purani setting aur animations restore karna
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Restore (Jo class save thi wo wapis lagana)
    const savedClass = localStorage.getItem('user-theme-class');
    if (savedClass) {
        document.body.classList.add(savedClass);
    }

    // 2. Animate Progress Bars (Aapka purana code)
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
