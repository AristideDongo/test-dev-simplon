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