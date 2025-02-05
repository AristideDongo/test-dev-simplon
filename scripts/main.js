// Gestion principale du site
document.addEventListener('DOMContentLoaded', () => {
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

//Pour l'activation du menu burger
const burger = document.querySelector('.menu-burger')
const navLinks = document.querySelector('.menu')

burger.addEventListener("click", () => {
    navLinks.classList.toggle("menu-active");
    burger.classList.toggle("active");
});

//Pour le changement de texte du paragraphe du hero
const texts = [
    "Développeur Junior Passionné par le Web",
    "En quête de nouvelles compétences en Technologie",
    "Explorer et Créer des Solutions Innovantes",
    "Toujours à la recherche de nouveaux défis techniques",
];

let currentIndex = 0
const textElemnt = document.getElementById('change-text')

function changeText() {
    textElemnt.classList.add('fade-out')

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length
        textElemnt.textContent = texts[currentIndex]
        textElemnt.classList.remove('fade-out')
    }, 500)
}

setInterval(changeText, 700)


//Modal pour le message de bienvenue
document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.querySelector('.welcome-btn');
    const popup = document.querySelector('.welcome-popup');
    const popupOverlay = document.querySelector('.welcome-popup-overlay');
    const closePopupBtn = document.querySelector('.close-popup');

    // Fonction pour ouvrir le popup
    function openPopup() {
        popup.style.display = 'block';
        popupOverlay.style.display = 'block';
    }

    // Fonction pour fermer le popup
    function closePopup() {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    }

    // Événement pour ouvrir le popup
    welcomeBtn.addEventListener('click', openPopup);

    // Événement pour fermer le popup
    closePopupBtn.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup);
});
