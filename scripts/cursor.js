// Gestion du curseur personnalisé
const cursor = document.querySelector('.cursor');
let isAnimationsEnabled = true;

document.addEventListener('mousemove', (e) => {
    if (!isAnimationsEnabled) return;
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Effet d'agrandissement du curseur sur les éléments interactifs
document.querySelectorAll('a, button, .project-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!isAnimationsEnabled) return;
        cursor.style.transform = 'scale(2)';
    });
    
    item.addEventListener('mouseleave', () => {
        if (!isAnimationsEnabled) return;
        cursor.style.transform = 'scale(1)';
    });
});