// ===========================
// NAVIGATION MOBILE
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===========================
    // NAVBAR SCROLL EFFECT
    // ===========================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // SMOOTH SCROLL
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // ANIMATION DES BARRES DE COMPÉTENCES
    // ===========================
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // ===========================
    // ANIMATION AU SCROLL (FADE IN)
    // ===========================
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Appliquer l'animation aux cartes de services
    document.querySelectorAll('.service-card, .skills-category').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(card);
    });

    // ===========================
    // FORMULAIRE DE CONTACT
    // ===========================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Désactiver le bouton pendant l'envoi
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';
            
            // Récupérer les données du formulaire
            const formData = new FormData(contactForm);
            
            try {
                // Envoyer via Formspree
                const response = await fetch('https://formspree.io/f/mqedzvgv', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Succès - Afficher notification
                    showNotification('✅ Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
                    
                    // Réinitialiser le formulaire
                    contactForm.reset();
                } else {
                    // Erreur serveur
                    showNotification('❌ Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
                }
            } catch (error) {
                // Erreur réseau
                showNotification('❌ Erreur de connexion. Vérifiez votre internet.', 'error');
                console.error('Erreur:', error);
            } finally {
                // Réactiver le bouton
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    // Fonction pour afficher une notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        
        const backgroundColor = type === 'success' 
            ? 'linear-gradient(135deg, #10b981, #059669)' 
            : 'linear-gradient(135deg, #ef4444, #dc2626)';
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${backgroundColor};
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.5s ease;
            max-width: 350px;
            font-size: 1rem;
        `;
        notification.textContent = message;
        
        // Ajouter l'animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Retirer la notification après 6 secondes
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 6000);
    }

    // ===========================
    // PARALLAX EFFECT (LÉGER)
    // ===========================
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ===========================
    // CURSEUR PERSONNALISÉ (OPTIONNEL)
    // ===========================
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #f97316;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    function animateCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        
        cursorX += distX * 0.1;
        cursorY += distY * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Agrandir le curseur au survol des liens et boutons
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = '#64ffda';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#f97316';
        });
    });

    // ===========================
    // LOADER (OPTIONNEL)
    // ===========================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===========================
    // CONSOLE EASTER EGG
    // ===========================
    console.log('%c👨‍💻 Développé par Aly Kandji', 'color: #f97316; font-size: 20px; font-weight: bold;');
    console.log('%c🚀 Portfolio professionnel - 2024', 'color: #64ffda; font-size: 14px;');
    console.log('%c📧 Contact: alykandji7@gmail.com', 'color: #8892b0; font-size: 12px;');
});
