document.addEventListener('DOMContentLoaded', function() {
    let shown = false;
    const popup = document.getElementById('exitPopup');
    const closeBtn = document.querySelector('.close-popup');
    
    // Mostrar popup quando o mouse sair da janela
    document.addEventListener('mouseout', function(e) {
        if (!shown && e.clientY < 50) {
            popup.style.display = 'block';
            shown = true;
        }
    });

    // Fechar popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Fechar ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
});
