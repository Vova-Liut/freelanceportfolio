

const btnDarkMode = document.querySelector('.dark-mode-btn');


// check dark mode in system settings 

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}


// dark mode check in Local storage 

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === "light") {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

// Tracking changes in system

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light';

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');

    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
    }
});

// Turn on Dark mode

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}
