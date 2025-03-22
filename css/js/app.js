// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('dashboard-page').style.display = 'none';
    
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
}

// Tab Navigation
function changeTab(tab, tabContentId) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabContentId).classList.add('active');
}

// Modal Management
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Booking Functions
function bookNow(destination) {
    // Set destination in booking modal
    const destinationSelects = document.querySelectorAll('select');
    destinationSelects.forEach(select => {
        if (select.previousElementSibling && select.previousElementSibling.textContent === 'Destination') {
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].textContent === destination) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }
    });
    
    showModal('booking-modal');
}

function bookPackage(packageName) {
    // Logic to prefill booking form with package details
    showModal('booking-modal');
}

function processBooking() {
    // Hide booking modal
    hideModal('booking-modal');
    
    // Generate random booking reference
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const bookingRef = "SPX-" + Math.floor(Math.random() * 90000 + 10000);
    document.getElementById('booking-reference').textContent = bookingRef;
    
    // Show success modal
    showModal('booking-success-modal');
    
    // Show accommodation recommendations with delay
    setTimeout(() => {
        hideModal('booking-success-modal');
        showModal('accommodation-modal');
    }, 3000);
}

function selectAccommodation(accommodationName) {
    hideModal('accommodation-modal');
    
    // Add notification that accommodation has been added to booking
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--success-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${accommodationName} added to your booking!`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

function searchFlights() {
    // In a full application, this would query a backend server
    // For now, we'll just show a notification that the search is happening
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Searching for available flights...`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}

function searchHotels() {
    // Similar to searchFlights but for hotel search
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Searching for space accommodations...`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}

function searchExperiences() {
    // Similar to searchFlights but for experiences search
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Searching for space experiences...`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}

function login() {
    // In a real application, this would authenticate with a backend server
    hideModal('login-modal');
    showPage('dashboard-page');
}

function viewBooking() {
    hideModal('booking-success-modal');
    showPage('dashboard-page');
}

// Countdown Timer
function updateCountdown() {
    // Set the launch date (hardcoded for demo)
    const launchDate = new Date("April 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update the countdown display
    if (document.getElementById('days')) {
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
}

// Initialize the application
function initApp() {
    // Start countdown timer
    setInterval(updateCountdown, 1000);
    
    // Set minimum dates for all date inputs to today
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.min = today;
    });
    
    // Close modals when clicking outside
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
    
    // Initialize any other necessary features
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);