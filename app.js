// --- 1. IMPORT FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// NEW: Added 'collection' and 'getDocs' to read from the database
import { getFirestore, doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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
const db = getFirestore(app);

// --- 4. AUTHENTICATION LOGIC (Login & Signup Pages) ---

// Logic for the LOGIN Page
const loginForm = document.getElementById('auth-form'); // Your existing login form
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // ONLY log them in
        signInWithEmailAndPassword(auth, email, password)
            .then(() => { window.location.href = "dashboard.html"; })
            .catch((error) => { alert("Error logging in: " + error.message); });
    });
}

// Logic for the SIGNUP Page
const signupForm = document.getElementById('signup-form'); // Your new signup form
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        // ONLY create an account
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => { 
                alert("Account created successfully! Let's set up your profile.");
                window.location.href = "dashboard.html"; 
            })
            .catch((error) => { alert("Error creating account: " + error.message); });
    });
}

// --- 5. DASHBOARD LOGIC (Save Profile & Logout) ---
const profileForm = document.getElementById('profile-form');
const logoutBtn = document.getElementById('logout-btn');

if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const user = auth.currentUser;
        if (!user) {
            alert("You must be logged in to save a profile!");
            return;
        }

        const name = document.getElementById('barber-name').value;
        const shop = document.getElementById('shop-name').value;
        const city = document.getElementById('city-name').value;
        const calendlyUrl = document.getElementById('calendly-link').value;

        try {
            await setDoc(doc(db, "barbers", user.uid), {
                name: name,
                shop: shop,
                city: city,
                calendlyUrl: calendlyUrl,
                languages: ["English", "Amharic"], // Default tags for now
                specialty: "Habesha Cuts"
            });
            alert("Profile saved successfully to the live directory!");
        } catch (error) {
            alert("Error saving profile: " + error.message);
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => { window.location.href = "login.html"; })
        .catch(() => { alert("Error signing out."); });
    });
}

// --- 6. LIVE DATABASE & HOMEPAGE LOGIC ---
let allBarbers = []; // We will store the live database data here

// This function reaches into Firestore and grabs all the barbers
window.loadBarbersFromDatabase = async function() {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; 

    grid.innerHTML = '<p style="text-align:center; width:100%;">Loading live directory...</p>';

    try {
        const querySnapshot = await getDocs(collection(db, "barbers"));
        allBarbers = []; // Clear the array
        
        querySnapshot.forEach((doc) => {
            // Push each barber from Google Cloud into our local array
            allBarbers.push(doc.data());
        });

        // Now draw the cards!
        window.renderBarbers(allBarbers);

    } catch (error) {
        console.error("Error fetching data: ", error);
        grid.innerHTML = '<p>Error loading barbers. Please check your connection.</p>';
    }
};

window.renderBarbers = function(barberList) {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; 
    
    grid.innerHTML = ''; 
    if(barberList.length === 0) {
        grid.innerHTML = '<p>No barbers found yet. Be the first to join!</p>';
        return;
    }

    barberList.forEach(barber => {
        const card = document.createElement('div');
        card.className = 'barber-card';
        card.innerHTML = `
            <div class="barber-info">
                <h4>${barber.name || 'Unknown Barber'}</h4>
                <p class="barber-shop">${barber.shop || ''} - ${barber.city || ''}</p>
                <div class="barber-tags">
                    <span class="tag">${barber.languages ? barber.languages.join(", ") : "English"}</span>
                    <span class="tag">${barber.specialty || "Barber"}</span>
                </div>
                <button class="btn-primary book-btn" onclick="openCalendly('${barber.calendlyUrl}')">Book Now</button>
            </div>
        `;
        grid.appendChild(card);
    });
};

window.filterBarbers = function() {
    const searchInput = document.getElementById('city-search').value.toLowerCase();
    const filteredList = allBarbers.filter(barber => 
        barber.city && barber.city.toLowerCase().includes(searchInput)
    );
    window.renderBarbers(filteredList);
};

window.openCalendly = function(url) {
    if(!url || url === "") {
        alert("This barber hasn't set up their booking link yet!");
        return false;
    }
    Calendly.initPopupWidget({ url: url });
    return false;
};

// When the homepage loads, fetch the real data!
window.onload = () => {
    if(document.getElementById('barber-grid')) {
        window.loadBarbersFromDatabase();
    }
};
