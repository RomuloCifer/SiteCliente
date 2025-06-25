document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Verifica se há tema salvo
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateThemeIcon(currentTheme === 'dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        const isDark = body.classList.contains('dark-theme');
        updateThemeIcon(isDark);
        
        // Salva a preferência
        localStorage.setItem('theme', isDark ? 'dark-theme' : '');
    });

    function updateThemeIcon(isDark) {
        themeToggle.innerHTML = isDark 
            ? '<i class="fas fa-moon"></i>'
            : '<i class="fas fa-sun"></i>';
    }
});
