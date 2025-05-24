function openMethodologyPopup() {
    const width = 1000;
    const height = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open('methodology.html', 'methodology',
        `width=${width},
         height=${height},
         left=${left},
         top=${top},
         popup=yes,
         scrollbars=yes`
    );
}
