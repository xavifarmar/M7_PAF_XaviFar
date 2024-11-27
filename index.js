// Funció per moure tasques de PENDENTS a FETES
function moureTasques(tasca) {
    const pendents = document.querySelector('.PENDENTS');
    const fetes = document.querySelector('.FETES');

    // Comprovem si la tasca ja està completa
    if (tasca.classList.contains('completed')) {
        // Si la tasca està feta, la movem a PENDENTS
        pendents.appendChild(tasca);
        tasca.classList.remove('completed'); // Eliminem la classe 'completed'
        tasca.style.cursor = 'pointer';
    } else {
        // Si la tasca no està feta, la movem a FETES
        fetes.appendChild(tasca);
        tasca.classList.add('completed'); // Afegim la classe 'completed'
        tasca.style.cursor = 'default';
    }
}
