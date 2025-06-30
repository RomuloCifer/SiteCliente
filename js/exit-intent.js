document.addEventListener('DOMContentLoaded', function() {
    let shown = false;
    const popup = document.getElementById('exitPopup');
    const closeBtn = document.querySelector('.close-popup');
    const ctaBtn = document.querySelector('.popup-cta');
    
    // Mostrar popup apenas quando o mouse sair pela parte superior da página
    document.addEventListener('mouseleave', function(e) {
        if (!shown && e.clientY < 50) {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
            shown = true;
        }
    });

    // Fechar popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fechar popup ao clicar no botão "Quero aproveitar essa oferta!"
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Fechar ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
