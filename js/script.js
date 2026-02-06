// ===== Smooth Scroll Behavior =====
document.addEventListener('DOMContentLoaded', () => {
    // Enable smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Intersection Observer for Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Optionally unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for scroll-triggered animations
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // ===== Subtle Parallax Effect on Header (Optional) =====
    const header = document.querySelector('.resume-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;
        
        if (header) {
            // Subtle parallax effect
            const translateY = scrollTop * 0.3;
            header.style.transform = `translateY(${translateY}px)`;
            header.style.opacity = Math.max(0.3, 1 - scrollTop / 400);
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });

    // ===== Hover Effects Enhancement =====
    const experienceItems = document.querySelectorAll('.experience-item, .project-item');
    
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ===== Add a subtle typing effect to the header (Optional) =====
    const headerTitle = document.querySelector('.resume-header h1');
    if (headerTitle) {
        const originalText = headerTitle.textContent;
        headerTitle.textContent = '';
        
        let charIndex = 0;
        const typingSpeed = 50; // milliseconds per character
        
        function typeText() {
            if (charIndex < originalText.length) {
                headerTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeText, 300);
    }

    // ===== Console Easter Egg =====
    console.log('%c👋 Thanks for checking out the code!', 'color: #0066cc; font-size: 16px; font-weight: bold;');
    console.log('%cIf you\'re interested in working together, let\'s connect!', 'color: #555; font-size: 12px;');
});

// ===== Smooth Page Load =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});