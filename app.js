// --- 1. IMPORT FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// NEW: Import Firestore Database
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// --- 2. YOUR FIREBASE KEYS ---
const firebaseConfig = {
  apiKey: "AIzaSyCJZEqXP_jdy2wFQBd7iB1TV_AwikgXkq4",
  authDomain: "habesha-cuts.firebaseapp.com",
  projectId: "habesha-cuts",
  storageBucket: "habesha-cuts.firebasestorage.app",
  messagingSenderId: "819909600217",
  appId: "1:819909600217:web:bf5c14f71ed7903cdc2fc8"
};

// --- 3. INITIALIZE THE APP & DATABASE ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Turns on the database

// --- 4. AUTHENTICATION LOGIC (Login Page) ---
const authForm = document.getElementById('auth-form');

if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                window.location.href = "dashboard.html"; 
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            window.location.href = "dashboard.html"; 
                        })
                        .catch((loginError) => alert("Error logging in: " + loginError.message));
                } else {
                    alert("Error: " + error.message);
                }
            });
    }); // <-- This was the missing closing bracket!
}

// --- 5. DASHBOARD LOGIC (Save Profile & Logout) ---
const profileForm = document.getElementById('profile-form');
const logoutBtn = document.getElementById('logout-btn');

// Handle Profile Saving
if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const user = auth.currentUser;
        if (!user) {
            alert("You must be logged in to save a profile!");
            return;
        }

        // Get the values the barber typed in
        const name = document.getElementById('barber-name').value;
        const shop = document.getElementById('shop-name').value;
        const city = document.getElementById('city-name').value;
        const calendlyUrl = document.getElementById('calendly-link').value;

        try {
            // Save it to Firestore in a "barbers" collection, tied to their specific user ID
            await setDoc(doc(db, "barbers", user.uid), {
                name: name,
                shop: shop,
                city: city,
                calendlyUrl: calendlyUrl,
                languages: ["English"], // We can add form inputs for these later
                specialty: "Habesha Cuts"
            });
            alert("Profile saved successfully to the live database!");
        } catch (error) {
            alert("Error saving profile: " + error.message);
        }
    });
}

// Handle Logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = "login.html";
        }).catch((error) => {
            alert("Error signing out.");
        });
    });
}

// --- 6. MOCK DATABASE & HOMEPAGE LOGIC ---
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
    if(!grid) return; 
    
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
