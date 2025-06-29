
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initSmoothScrolling();
    initFormHandling();
    initNavigationEffects();
    initAnimations();
    initThemeToggle();
    initEmailJS();
});

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
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
}

/**
 * Handle contact form submission with EmailJS
 */
function initFormHandling() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Prepare template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'hilmiwali7702@gmail.com'
            };
            
            emailjs.send('service_f883jke', 'template_mbolpyd', templateParams)
                .then(function(response) {
                    showNotification('Thank you! Your message has been sent successfully.', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    showNotification('Sorry, there was an error. Please try again.', 'error');
                })
                .finally(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

/**
 * Navigation scroll effects
 */
function initNavigationEffects() {
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;
    
    function updateNavBackground() {
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const currentScrollY = window.scrollY;
        
        if (currentTheme === 'dark') {
            if (currentScrollY > 100) {
                nav.style.background = 'rgba(26, 32, 44, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4)';
            } else {
                nav.style.background = 'rgba(26, 32, 44, 0.95)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            }
        } else {
            if (currentScrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateNavBackground);
    
    updateNavBackground();
}

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const nav = document.querySelector('nav');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    function updateNavForTheme(theme) {
        if (theme === 'dark') {
            nav.style.background = 'rgba(26, 32, 44, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
        updateNavForTheme('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeSwitch.checked = false;
        updateNavForTheme('light');
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateNavForTheme('dark');
            showNotification('Dark mode enabled', 'success');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateNavForTheme('light');
            showNotification('Light mode enabled', 'success');
        }
        
        if (window.initNavigationEffects) {
            initNavigationEffects();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeSwitch.click();
        }
    });
}
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * Email validation helper function
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Initialize EmailJS
 */
function initEmailJS() {
    emailjs.init('P_vI0_sHWNjvD0hQq');
}

/**
 * Show notification to user
 */
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Utility function to throttle scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/**
 * Add typing effect to hero title
 */
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

/**
 * Debug function to check if file exists
 */
async function checkResumeFile() {
    try {
        const response = await fetch('assets/hilmi_resume.pdf', { method: 'HEAD' });
        if (response.ok) {
            console.log('✅ Resume file found!');
            showNotification('Resume file is accessible', 'success');
            return true;
        } else {
            console.log('❌ Resume file not found. Status:', response.status);
            showNotification(`Resume file not found (Status: ${response.status})`, 'error');
            return false;
        }
    } catch (error) {
        console.log('❌ Error checking resume file:', error);
        showNotification('Error checking resume file', 'error');
        return false;
    }
}

/**
 * Download resume functionality
 */
function downloadResume() {
    try {
        console.log('🚀 Starting basic download...');
        
        const link = document.createElement('a');
        
        link.href = 'assets/hilmi_resume.pdf';
        link.download = 'hilmi_resume.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('Resume download started!', 'success');
        console.log('✅ Download attempted for: assets/hilmi_resume.pdf');
        
    } catch (error) {
        console.error('❌ Download error:', error);
        showNotification('Download failed. Opening resume in new tab...', 'error');
        
        window.open('assets/hilmi_resume.pdf', '_blank');
    }
}

/**
 * Alternative download method using fetch
 */
async function downloadResumeAdvanced() {
    try {
        console.log('🚀 Starting advanced download...');
        showNotification('Preparing download...', 'info');
        
        const response = await fetch('assets/hilmi_resume.pdf');
        
        if (!response.ok) {
            throw new Error(`Resume file not found. Status: ${response.status}`);
        }
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'hilmi_resume.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(url);
        
        showNotification('Resume downloaded successfully!', 'success');
        console.log('✅ Advanced download completed');
        
    } catch (error) {
        console.error('❌ Advanced download error:', error);
        showNotification('Unable to download resume. Opening in new tab...', 'error');
        
        window.open('assets/hilmi_resume.pdf', '_blank');
    }
}

/**
 * Enhanced download function with better debugging
 */
async function downloadResumeWithDebug() {
    console.log('🔍 Starting download process with debug...');
    
    const fileExists = await checkResumeFile();
    
    if (fileExists) {
        await downloadResumeAdvanced();
    } else {
        console.log('📁 File not found, trying alternative methods...');
        
        const possiblePaths = [
            'assets/hilmi_resume.pdf',
            './assets/hilmi_resume.pdf',
            'hilmi_resume.pdf',
            'assets/Ahmad_Hilmi_Resume.pdf'
        ];
        
        let foundFile = false;
        
        for (const path of possiblePaths) {
            try {
                console.log(`🔍 Trying path: ${path}`);
                const response = await fetch(path, { method: 'HEAD' });
                if (response.ok) {
                    console.log(`✅ Found file at: ${path}`);
                    window.open(path, '_blank');
                    showNotification('Resume opened in new tab', 'success');
                    foundFile = true;
                    break;
                }
            } catch (error) {
                console.log(`❌ Not found at: ${path}`);
            }
        }
        
        if (!foundFile) {
            showNotification('Resume file not found. Please check the file path.', 'error');
        }
    }
}

// Export functions for potential use in other modules
window.PortfolioJS = {
    showNotification,
    isValidEmail,
    addTypingEffect,
    downloadResume,
    downloadResumeAdvanced,
    toggleTheme: function() {
        document.getElementById('theme-switch').click();
    },
    getCurrentTheme: function() {
        return document.body.getAttribute('data-theme') || 'light';
    }
};