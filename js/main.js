document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        updateButtonIcon();
    }

    // Update button icon based on current theme
    function updateButtonIcon() {
        themeToggle.innerHTML = body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    }

    // Check for system color scheme preference
    function getSystemThemePreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Set up system theme preference listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches);
        }
    });

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        setTheme(getSystemThemePreference());
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        setTheme(!body.classList.contains('dark-mode'));
    });

    // Initial button icon update
    updateButtonIcon();
});