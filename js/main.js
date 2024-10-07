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

    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');

    // Update button icon based on current theme
    function updateButtonIcon() {
        themeToggle.innerHTML = body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        setTheme(!body.classList.contains('dark-mode'));
    });

    // Initial button icon update
    updateButtonIcon();
});