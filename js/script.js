// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('nav');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Close mobile nav when a link is clicked
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Show success message
            const successMessage = document.querySelector('.success-message');
            if (successMessage) {
                successMessage.classList.add('show');
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            }

            // Reset form
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMessage) {
                    successMessage.classList.remove('show');
                }
            }, 5000);
        });
    }

    // Handle Insurance Comparison Form
    const comparisonForm = document.getElementById('comparisonForm');
    if (comparisonForm) {
        comparisonForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const tripStartDate = document.getElementById('tripStartDate').value;
            const tripEndDate = document.getElementById('tripEndDate').value;
            const age = document.getElementById('age').value;

            // Basic validation
            if (!tripStartDate || !tripEndDate || !age) {
                alert('Please fill in all fields');
                return;
            }

            // Show results message
            const resultsMessage = document.querySelector('.results-message') || createResultsMessage();
            resultsMessage.textContent = 'Comparing plans for your trip... You will be redirected to our trusted insurance partners shortly.';
            resultsMessage.classList.add('show');

            // In a real scenario, this would filter and display plans
            // For now, redirect to insurance provider after a short delay
            setTimeout(() => {
                // This would be replaced with actual affiliate links
                alert('Ready to compare plans? Click OK to view options from our trusted partners.');
            }, 1000);
        });
    }
});

// Create results message element if it doesn't exist
function createResultsMessage() {
    const container = document.querySelector('.comparison-form');
    if (container) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'success-message';
        container.insertBefore(messageDiv, container.firstChild);
        return messageDiv;
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Current page highlighting in navigation
function highlightCurrentPage() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('nav a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentLocation.includes(href.replace('.html', '')) || 
            (currentLocation === '/' && href === 'index.html')) {
            item.style.color = '#ff6b6b';
            item.style.borderBottomColor = '#ff6b6b';
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', highlightCurrentPage);
