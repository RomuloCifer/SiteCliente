
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);

    // Criar estrelas visíveis em fundo claro
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 8}s`;
        starsContainer.appendChild(star);
    }

    // Adiciona estilo diretamente via JS
    const style = document.createElement('style');
    style.textContent = `
        .stars-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #888; /* tom escuro para fundo claro */
            border-radius: 50%;
            opacity: 0.7;
            animation: twinkle 4s infinite ease-in-out;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.3); }
        }
    `;
    document.head.appendChild(style);
});
