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
    const dots = document.querySelectorAll('.carousel__dot');

    if (carouselContainer && dots.length > 0) {
        const cards = carouselContainer.querySelectorAll('.carousel__card');
        const cardWidth = 300; // 280px + 20px gap
        let currentIndex = 0;

        // Clone du premier article pour afficher à la fin
        const firstCardClone = cards[0].cloneNode(true);
        carouselContainer.appendChild(firstCardClone);

        // Mettre à jour les points lors du scroll
        carouselContainer.addEventListener('scroll', () => {
            const scrollLeft = carouselContainer.scrollLeft;
            currentIndex = Math.round(scrollLeft / cardWidth);

            // Limiter l'index au nombre de cartes réelles
            const activeIndex = currentIndex % cards.length;

            // Mettre à jour les points
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('carousel__dot--active');
                } else {
                    dot.classList.remove('carousel__dot--active');
                }
            });

            // Si on arrive à la fin, dupliquer les articles et continuer
            const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;
            if (scrollLeft >= maxScroll - 100) {
                cards.forEach(card => {
                    const clone = card.cloneNode(true);
                    carouselContainer.appendChild(clone);
                });
            }
        });

        // Cliquer sur un point pour scroller jusqu'à cet article
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const scrollPosition = index * cardWidth;
                carouselContainer.scrollLeft = scrollPosition;
                currentIndex = index;
            });
        });
    }
});