// --- MOCK DATABASE ---
// Later, we will replace this array with real data fetched from Firebase Firestore
const barbers = [
    {
        id: 1,
        name: "Dawit M.",
        shop: "Crown Barbershop",
        city: "Toronto",
        languages: ["Amharic", "English"],
        specialty: "Fades & Textured Hair",
        // NOTE: Replace this with the real barber's Calendly link later
        calendlyUrl: "https://calendly.com/YOUR_CALENDLY_USERNAME/30min" 
    },
    {
        id: 2,
        name: "Simon T.",
        shop: "Habesha Cuts Studio",
        city: "Calgary",
        languages: ["Tigrinya", "English"],
        specialty: "Precision Tapers",
        calendlyUrl: "https://calendly.com/YOUR_CALENDLY_USERNAME/30min"
    },
    {
        id: 3,
        name: "Elias K.",
        shop: "City Kings Barbers",
        city: "Toronto",
        languages: ["Amharic", "Oromo"],
        specialty: "Beard Sculpting",
        calendlyUrl: "https://calendly.com/YOUR_CALENDLY_USERNAME/30min"
    }
];

// --- RENDER BARBERS FUNCTION ---
// This function takes the data and creates the HTML cards dynamically
function renderBarbers(barberList) {
    const grid = document.getElementById('barber-grid');
    grid.innerHTML = ''; // Clear current grid

    if(barberList.length === 0) {
        grid.innerHTML = '<p>No barbers found in this city yet.</p>';
        return;
    }

    barberList.forEach(barber => {
        // Create the card element
        const card = document.createElement('div');
        card.className = 'barber-card';
        
        // Build the HTML inside the card
        card.innerHTML = `
            <div class="barber-info">
                <h4>${barber.name}</h4>
                <p class="barber-shop">${barber.shop} - ${barber.city}</p>
                <div class="barber-tags">
                    <span class="tag">${barber.languages.join(", ")}</span>
                    <span class="tag">${barber.specialty}</span>
                </div>
                <button class="btn-primary book-btn" onclick="openCalendly('${barber.calendlyUrl}')">
                    Book Now
                </button>
            </div>
        `;
        
        // Add the card to the grid
        grid.appendChild(card);
    });
}

// --- SEARCH / FILTER FUNCTION ---
function filterBarbers() {
    const searchInput = document.getElementById('city-search').value.toLowerCase();
    
    const filteredList = barbers.filter(barber => 
        barber.city.toLowerCase().includes(searchInput)
    );
    
    renderBarbers(filteredList);
}

// --- CALENDLY INTEGRATION ---
// This opens the Calendly booking page as a professional popup over your website
function openCalendly(url) {
    Calendly.initPopupWidget({ url: url });
    return false;
}

// --- INITIALIZE ---
// Run this when the page loads to show all barbers
window.onload = () => {
    renderBarbers(barbers);
};
