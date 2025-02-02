// Navigation and Menu Handling
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('.navbar13_menu-button');
    const mobileMenu = document.querySelector('.navbar13_menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-open');
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                menuButton?.classList.remove('is-active');
                mobileMenu?.classList.remove('is-open');
            }
        });
    });

    // Copy Address Button Functionality
    document.querySelectorAll('[fs-copyclip-element="click-1"], [fs-copyclip-element="click-2"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const copyElement = this.closest('.fs-copyclip_wrapper').querySelector('.fs-copyclip_text');
            const successDiv = this.closest('.fs-copyclip_wrapper').querySelector('.success-div');
            
            if (copyElement) {
                navigator.clipboard.writeText(copyElement.textContent.trim())
                    .then(() => {
                        // Show success message
                        if (successDiv) {
                            successDiv.style.opacity = '1';
                            setTimeout(() => {
                                successDiv.style.opacity = '0';
                            }, 2000);
                        }
                    })
                    .catch(err => {
                        console.error('Failed to copy:', err);
                    });
            }
        });
    });

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq4_question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq4_icon-wrappper');
            
            // Toggle active state
            question.classList.toggle('active');
            
            // Animate answer height
            if (answer.style.height === '0px' || !answer.style.height) {
                answer.style.height = answer.scrollHeight + 'px';
                icon?.style.setProperty('transform', 'rotate(45deg)');
            } else {
                answer.style.height = '0px';
                icon?.style.setProperty('transform', 'rotate(0deg)');
            }
        });
    });

    // Scroll-triggered Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.header1_content, .layout353_component, .layout1_component').forEach(element => {
        observer.observe(element);
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.backtotop_component');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }

    // Dropdown Menu Handling
    const dropdowns = document.querySelectorAll('.navbar13_menu-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.navbar13_dropdown-toggle');
        const list = dropdown.querySelector('.navbar13_dropdown-list');
        
        if (toggle && list) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                list.classList.toggle('w--open');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) {
                    list.classList.remove('w--open');
                }
            });
        }
    });
});

// Marquee Animation
const marqueeContents = document.querySelectorAll('.marquee-content');

marqueeContents.forEach(content => {
    // Clone content for seamless scrolling
    const clone = content.cloneNode(true);
    content.parentElement.appendChild(clone);
});

// Handle Contract Networks
const baseButton = document.querySelector('[href*="base"]');
const solanaButton = document.querySelector('[href*="solana"]');

if (baseButton) {
    baseButton.addEventListener('click', (e) => {
        // Add Base network interaction logic here
        console.log('Base network selected');
    });
}

if (solanaButton) {
    solanaButton.addEventListener('click', (e) => {
        // Add Solana network interaction logic here
        console.log('Solana network selected');
    });
}

// Error Handling and Loading States
window.addEventListener('error', function(e) {
    console.error('Global error handler:', e.error);
    // Implement error tracking or user notification here
});

// Performance Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => lazyImageObserver.observe(img));
    }
});

