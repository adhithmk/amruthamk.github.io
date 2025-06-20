document.addEventListener('DOMContentLoaded', function() {
    // Initialize Map if element exists
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Set default coordinates (replace with actual university coordinates)
        const defaultLatLng = [12.9716, 77.5946]; // Example: Bangalore, India
        const zoomLevel = 15;

        // Create map instance
        const map = L.map('map').setView(defaultLatLng, zoomLevel);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
        }).addTo(map);

        // Add marker
        const marker = L.marker(defaultLatLng).addTo(map);
        marker.bindPopup("<b>University Name</b><br>Department of English").openPopup();

        // Add click handler for "Get directions" link
        const directionsLink = document.querySelector('a[href="#"]');
        if (directionsLink) {
            directionsLink.addEventListener('click', function(e) {
                e.preventDefault();
                const url = `https://www.google.com/maps/dir//${defaultLatLng[0]},${defaultLatLng[1]}/`;
                window.open(url, '_blank');
            });
        }
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    
    if (contactForm && submitButton) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button to prevent multiple submissions
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
            `;
            
            try {
                // Get form data
                const formData = new FormData(contactForm);
                const formObject = {};
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });
                
                // Here you would typically send the form data to a server
                // For example, using fetch() to your form handling endpoint
                // const response = await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(formObject),
                // });
                
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                contactForm.reset();
                formSuccess.classList.remove('hidden');
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
                
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error submitting your message. Please try again later.');
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }
});
