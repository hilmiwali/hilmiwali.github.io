// Portfolio Website JavaScript
// Author: Hilmi Wali
// Description: Main JavaScript functionality for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initSmoothScrolling();
    initFormHandling();
    initNavigationEffects();
    initAnimations();
    initThemeToggle();
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
 * Handle contact form submission
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
            
            // Simulate form submission
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            this.reset();
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
    
    // Call once to set initial state
    updateNavBackground();
}

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const nav = document.querySelector('nav');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Function to update navigation style based on theme
    function updateNavForTheme(theme) {
        if (theme === 'dark') {
            nav.style.background = 'rgba(26, 32, 44, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
        updateNavForTheme('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeSwitch.checked = false;
        updateNavForTheme('light');
    }
    
    // Add event listener for theme switch
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
        
        // Trigger navigation update
        if (window.initNavigationEffects) {
            initNavigationEffects();
        }
    });
    
    // Optional: Add keyboard shortcut (Ctrl/Cmd + D)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeSwitch.click();
        }
    });
}
function initAnimations() {
    // Intersection Observer for fade-in animations
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
    
    // Observe skill cards and project cards
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
 * Show notification to user
 */
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
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
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
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
 * Add typing effect to hero title (optional enhancement)
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
        
        // Create a temporary link element
        const link = document.createElement('a');
        
        // Set the download attributes - using your actual file name
        link.href = 'assets/hilmi_resume.pdf';
        link.download = 'Hilmi_Resume.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show notification
        showNotification('Resume download started!', 'success');
        console.log('✅ Download attempted for: assets/hilmi_resume.pdf');
        
    } catch (error) {
        console.error('❌ Download error:', error);
        showNotification('Download failed. Opening resume in new tab...', 'error');
        
        // Fallback: Open resume in new tab
        window.open('assets/hilmi_resume.pdf', '_blank');
    }
}

/**
 * Alternative download method using fetch (for better error handling)
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
        link.download = 'Hilmi_Resume.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the blob URL
        window.URL.revokeObjectURL(url);
        
        showNotification('Resume downloaded successfully!', 'success');
        console.log('✅ Advanced download completed');
        
    } catch (error) {
        console.error('❌ Advanced download error:', error);
        showNotification('Unable to download resume. Opening in new tab...', 'error');
        
        // Fallback: Open resume in new tab
        window.open('assets/hilmi_resume.pdf', '_blank');
    }
}

/**
 * Enhanced download function with better debugging
 */
async function downloadResumeWithDebug() {
    console.log('🔍 Starting download process with debug...');
    
    // First, check if file exists
    const fileExists = await checkResumeFile();
    
    if (fileExists) {
        // Try the advanced download method
        await downloadResumeAdvanced();
    } else {
        console.log('📁 File not found, trying alternative methods...');
        
        // Try different possible paths
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
            console.log('📋 Make sure your file is at: assets/hilmi_resume.pdf');
            console.log('📂 Current repository structure should be:');
            console.log('   hilmiwali.github.io/');
            console.log('   ├── index.html');
            console.log('   ├── styles/main.css');
            console.log('   ├── js/main.js');
            console.log('   └── assets/hilmi_resume.pdf  ← This file is missing!');
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