// --- 1. IMPORT FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// --- 2. YOUR FIREBASE KEYS ---
const firebaseConfig = {
  apiKey: "AIzaSyCJZEqXP_jdy2wFQBd7iB1TV_AwikgXkq4",
  authDomain: "habesha-cuts.firebaseapp.com",
  projectId: "habesha-cuts",
  storageBucket: "habesha-cuts.firebasestorage.app",
  messagingSenderId: "819909600217",
  appId: "1:819909600217:web:bf5c14f71ed7903cdc2fc8"
};

// --- 3. INITIALIZE THE APP ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- 4. AUTHENTICATION LOGIC (Login Page) ---
const authForm = document.getElementById('auth-form');

if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from refreshing
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // For Version 1.0, we will use the Login form to CREATE accounts too, just to test it!
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                alert("Success! Account created for: " + user.email);
                // Later, we will redirect them to their dashboard here
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                // If the account already exists, try logging them in instead
                if (errorCode === 'auth/email-already-in-use') {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            alert("Welcome back! Logged in successfully.");
                        })
                        .catch((loginError) => {
                            alert("Error logging in: " + loginError.message);
                        });
                } else {
                    alert("Error: " + errorMessage);
                }
            });
    });
}

// --- 5. MOCK DATABASE & HOMEPAGE LOGIC (From earlier) ---
const barbers = [
    {
        id: 1, name: "Dawit M.", shop: "Crown Barbershop", city: "Toronto", 
        languages: ["Amharic", "English"], specialty: "Fades & Textured Hair", 
        calendlyUrl: "https://calendly.com/peterbenjamin858" 
    },
    {
        id: 2, name: "Simon T.", shop: "Habesha Cuts Studio", city: "Calgary", 
        languages: ["Tigrinya", "English"], specialty: "Precision Tapers", 
        calendlyUrl: "https://calendly.com/peterbenjamin858"
    }
];

window.renderBarbers = function(barberList) {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; // Only run if we are on the homepage
    
    grid.innerHTML = ''; 
    if(barberList.length === 0) {
        grid.innerHTML = '<p>No barbers found in this city yet.</p>';
        return;
    }

    barberList.forEach(barber => {
        const card = document.createElement('div');
        card.className = 'barber-card';
        card.innerHTML = `
            <div class="barber-info">
                <h4>${barber.name}</h4>
                <p class="barber-shop">${barber.shop} - ${barber.city}</p>
                <div class="barber-tags">
                    <span class="tag">${barber.languages.join(", ")}</span>
                    <span class="tag">${barber.specialty}</span>
                </div>
                <button class="btn-primary book-btn" onclick="openCalendly('${barber.calendlyUrl}')">Book Now</button>
            </div>
        `;
        grid.appendChild(card);
    });
};

window.filterBarbers = function() {
    const searchInput = document.getElementById('city-search').value.toLowerCase();
    const filteredList = barbers.filter(barber => barber.city.toLowerCase().includes(searchInput));
    window.renderBarbers(filteredList);
};

window.openCalendly = function(url) {
    Calendly.initPopupWidget({ url: url });
    return false;
};

window.onload = () => {
    if(document.getElementById('barber-grid')) {
        window.renderBarbers(barbers);
    }
};
