// Search functionality
document.querySelector('.search-btn').addEventListener('click', async function() {
    const service = document.querySelector('.search-container input:first-child').value;
    const location = document.querySelector('.search-container input:last-child').value;
    
    if (service && location) {
        try {
            console.log('Searching for:', service, 'in:', location);
            const services = await API.searchServices(service, location);
            console.log('API Response:', services);
            displaySearchResults(services);
        } catch (error) {
            console.error('API Error:', error);
            alert('Error searching services: ' + error.message);
        }
    } else {
        alert('Please enter both service and location');
    }
});

// Function to display search results
function displaySearchResults(services) {
    const serviceGrid = document.querySelector('.service-grid');
    serviceGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <i class="fas fa-tools"></i>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p class="price">$${service.price}</p>
            <p class="location">${service.location}</p>
        </div>
    `).join('');
}
