// =====================================================
// FAMILI CARS - INTERACTIVE JAVASCRIPT
// =====================================================

// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// =====================================================
// ACTIVE NAV LINK ON SCROLL
// =====================================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// =====================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// =====================================================
// ANIMATED COUNTER FOR STATS
// =====================================================
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// =====================================================
// FLIP CARDS - MOBILE TOUCH SUPPORT
// =====================================================
const flipCards = document.querySelectorAll('.service-card-flip');

// Add click/tap support for mobile
flipCards.forEach(card => {
    card.addEventListener('click', function () {
        // Only toggle on mobile/tablet
        if (window.innerWidth <= 1023) {
            this.classList.toggle('flipped');
        }
    });
});

// =====================================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// =====================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.glass-card, .service-card-flip, .inventory-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// Stagger animation for grids
const grids = document.querySelectorAll('.services-grid, .inventory-grid, .testimonials-grid');

grids.forEach(grid => {
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated-grid')) {
                const cards = entry.target.children;
                Array.from(cards).forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                entry.target.classList.add('animated-grid');
            }
        });
    }, observerOptions);

    gridObserver.observe(grid);
});

// =====================================================
// PARTICLE SYSTEM
// =====================================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth <= 767 ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create particles on load
createParticles();

// =====================================================
// CONTACT FORM HANDLING - N8N WEBHOOK
// =====================================================
const contactForm = document.getElementById('contactForm');

// Function to show custom message
function showMessage(type, title, message) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%);
        border: 2px solid ${type === 'success' ? '#22C55E' : '#EF4444'};
        border-radius: 24px;
        padding: 40px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 100px ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
        animation: slideUp 0.4s ease;
    `;

    const icon = type === 'success' ? '✅' : '❌';
    const color = type === 'success' ? '#22C55E' : '#EF4444';

    modal.innerHTML = `
        <div style="font-size: 64px; margin-bottom: 20px;">${icon}</div>
        <h2 style="color: ${color}; font-size: 28px; margin-bottom: 16px; font-family: 'Plus Jakarta Sans', sans-serif;">${title}</h2>
        <p style="color: #E4E4E7; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">${message}</p>
        <button onclick="this.closest('.message-overlay').remove()" style="
            background: ${color};
            color: white;
            border: none;
            padding: 14px 32px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px ${type === 'success' ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'};
        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px ${type === 'success' ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'}'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px ${type === 'success' ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'}'">
            Cerrar
        </button>
    `;

    overlay.className = 'message-overlay';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Convert FormData to JSON object
    const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono') || 'No proporcionado',
        mensaje: formData.get('mensaje'),
        fecha: new Date().toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        origen: 'Famili Cars - Landing Page'
    };

    // Get submit button
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Show loading state
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.6';

    try {
        // Send to N8N webhook
        const response = await fetch('https://jeanc.app.n8n.cloud/webhook/dce35ebc-cebf-4d45-93b4-827717af53d0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Success - Show custom success message
            showMessage(
                'success',
                '¡Mensaje Enviado!',
                'Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.'
            );
            this.reset();
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        // Error - Show custom error message
        console.error('Error al enviar formulario:', error);
        showMessage(
            'error',
            'Error al Enviar',
            'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente por teléfono.'
        );
    } finally {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
    }
});


// =====================================================
// PARALLAX EFFECT (SUBTLE)
// =====================================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.car-3d-placeholder, .about-icon');

    parallaxElements.forEach(element => {
        const speed = 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =====================================================
// LAZY LOADING FOR IMAGES (when you add real images)
// =====================================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call when you add real images
// lazyLoadImages();

// =====================================================
// PERFORMANCE OPTIMIZATION
// =====================================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScroll);

// =====================================================
// ACCESSIBILITY IMPROVEMENTS
// =====================================================

// Add keyboard navigation for flip cards
flipCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.classList.toggle('flipped');
        }
    });
});

// Focus trap for mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }

        if (e.key === 'Escape') {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Apply focus trap when mobile menu is open
mobileMenuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        trapFocus(navLinks);
    }
});

// =====================================================
// CONSOLE WELCOME MESSAGE
// =====================================================
console.log('%c🚗 Famili Cars', 'color: #22C55E; font-size: 24px; font-weight: bold;');
console.log('%cTu Dealer de Confianza', 'color: #A1A1AA; font-size: 14px;');
console.log('%cWeb desarrollada con ❤️', 'color: #E4E4E7; font-size: 12px;');

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Famili Cars website loaded successfully');

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');

    // Initialize any additional features here
});
