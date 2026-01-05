document.addEventListener('DOMContentLoaded', () => {
    console.log("Le script est chargé !");

    /* =========================================
       1. MENU MOBILE (BURGER)
       ========================================= */
    const boutonMenu = document.querySelector('.btn__menu, .btn_menu');
    const menu = document.querySelector('.menu-mobile');
    const overlay = document.querySelector('.menu-overlay');

    // On vérifie que les éléments existent sur la page
    if (boutonMenu && menu) {
        boutonMenu.addEventListener('click', () => {
            const isOpen = boutonMenu.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            boutonMenu.setAttribute('aria-expanded', !isOpen);
            
            // Toggle menu visibility
            menu.setAttribute('aria-hidden', isOpen);
            
            // Toggle overlay
            if (overlay) {
                overlay.classList.toggle('is-open');
            }
            
            // Toggle body scroll
            document.body.classList.toggle('no-scroll');
        });
        
        // Close menu when clicking overlay
        if (overlay) {
            overlay.addEventListener('click', () => {
                boutonMenu.setAttribute('aria-expanded', 'false');
                menu.setAttribute('aria-hidden', 'true');
                overlay.classList.remove('is-open');
                document.body.classList.remove('no-scroll');
            });
        }
    }

    /* =========================================
       2. CAROUSEL (SCROLL INFINI)
       ========================================= */
    const carouselContainer = document.querySelector('.carousel__container');

    if (carouselContainer) {
        const cards = carouselContainer.querySelectorAll('.carousel__card');
        const cardWidth = 300; // 280px + 20px gap
        let currentIndex = 0;

        // Clone du premier et dernier article pour la boucle infinie
        const firstCardClone = cards[0].cloneNode(true);
        const lastCardClone = cards[cards.length - 1].cloneNode(true);

        carouselContainer.appendChild(firstCardClone);
        carouselContainer.insertBefore(lastCardClone, cards[0]);

        // Initialiser le scroll au premier article réel
        carouselContainer.scrollLeft = cardWidth;

        // Gestion de la boucle infinie
        carouselContainer.addEventListener('scroll', () => {
            const scrollLeft = carouselContainer.scrollLeft;
            const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;

            // Si on arrive à la fin, revenir au début
            if (scrollLeft >= maxScroll - 10) {
                carouselContainer.scrollLeft = cardWidth;
            }
            // Si on revient au début, aller à la fin
            else if (scrollLeft <= 10) {
                carouselContainer.scrollLeft = maxScroll - cardWidth;
            }
        });
    }
});