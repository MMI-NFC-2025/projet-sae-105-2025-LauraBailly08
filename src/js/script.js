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


    const carouselContainer = document.querySelector('.carousel__container');
    const btnPrev = document.querySelector('.carousel__nav--prev');
    const btnNext = document.querySelector('.carousel__nav--next');

    if (carouselContainer && btnPrev && btnNext) {
        
        btnNext.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: 350, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: -350, behavior: 'smooth' });
        });
    }
});