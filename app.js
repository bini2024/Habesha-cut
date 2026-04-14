// --- 1. IMPORT FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// NEW: Imported getDoc, updateDoc, and increment for tracking!
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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

// --- 4. AUTHENTICATION LOGIC (Login & Signup) ---
const loginForm = document.getElementById('auth-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        signInWithEmailAndPassword(auth, email, password)
            .then(() => { window.location.href = "dashboard.html"; })
            .catch((error) => { alert("Error logging in: " + error.message); });
    });
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const btn = signupForm.querySelector('button');
        btn.innerText = "Creating Account...";
        btn.disabled = true;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, 
                document.getElementById('signup-email').value, 
                document.getElementById('signup-password').value
            );
            
            // Save initial data PLUS stat trackers starting at 0
            await setDoc(doc(db, "barbers", userCredential.user.uid), {
                name: document.getElementById('signup-name').value,
                shop: document.getElementById('signup-shop').value,
                city: document.getElementById('signup-city').value,
                phone: document.getElementById('signup-phone').value,
                calendlyUrl: document.getElementById('signup-calendly').value,
                languages: ["English"], 
                specialty: "Habesha Cuts",
                bookingClicks: 0, // NEW: Start clicks at 0
                searchViews: 0,   // NEW: Start views at 0
                createdAt: new Date()
            });

            alert("Registration successful! Welcome to Habesha Cuts.");
            window.location.href = "dashboard.html"; 

        } catch (error) {
            btn.innerText = "Complete Registration";
            btn.disabled = false;
            alert("Error: " + error.message);
        }
    });
}

// Handle Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => { window.location.href = "login.html"; });
    });
}

// --- 5. DASHBOARD DATA FETCHER ---
// Automatically fetch the barber's real stats when they open the dashboard
if (window.location.pathname.includes("dashboard.html")) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docSnap = await getDoc(doc(db, "barbers", user.uid));
            if (docSnap.exists()) {
                const data = docSnap.data();
                
                // Put their name in the greeting
                document.getElementById('dash-greeting').innerText = data.name || "Barber";
                
                // Inject the real tracking numbers!
                const clicks = data.bookingClicks || 0;
                const views = data.searchViews || 0;
                
                document.getElementById('stat-clicks').innerText = clicks;
                document.getElementById('stat-views').innerText = views;
                
                // Fun MVP trick: Estimate their revenue (assuming a $30 cut and 50% of clicks actually book)
                const estimatedRevenue = clicks * 15; 
                document.getElementById('stat-revenue').innerText = "$" + estimatedRevenue;
            }
        } else {
            // Kick them out if they aren't logged in
            window.location.href = "login.html";
        }
    });
}

// --- 6. LIVE DIRECTORY & HOMEPAGE LOGIC ---
let allBarbers = []; 

window.loadBarbersFromDatabase = async function() {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; 
    grid.innerHTML = '<p style="text-align:center; width:100%;">Loading live directory...</p>';

    try {
        const querySnapshot = await getDocs(collection(db, "barbers"));
        allBarbers = []; 
        
        querySnapshot.forEach((doc) => {
            // NEW: We save the specific document ID so we know WHO to track clicks for!
            allBarbers.push({ id: doc.id, ...doc.data() });
            
            // Secretly increment their search views in the database (fire-and-forget)
            updateDoc(doc.ref, { searchViews: increment(1) }).catch(e => console.log(e));
        });

        window.renderBarbers(allBarbers);
    } catch (error) {
        grid.innerHTML = '<p>Error loading barbers.</p>';
    }
};

window.renderBarbers = function(barberList) {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; 
    
    grid.innerHTML = ''; 
    if(barberList.length === 0) return;

    barberList.forEach(barber => {
        const card = document.createElement('div');
        card.className = 'barber-card';
        // Notice the button now passes the barber.id to our tracking function
        card.innerHTML = `
            <div class="barber-info">
                <h4>${barber.name}</h4>
                <p class="barber-shop">${barber.shop} - ${barber.city}</p>
                <div class="barber-tags">
                    <span class="tag">Habesha Barber</span>
                </div>
                <button class="btn-primary book-btn" onclick="openCalendly('${barber.calendlyUrl}', '${barber.id}')">Book Now</button>
            </div>
        `;
        grid.appendChild(card);
    });
};

// --- THE TRACKER FUNCTION ---
window.openCalendly = function(url, barberId) {
    if(!url || url === "") {
        alert("This barber hasn't set up their booking link yet!");
        return false;
    }
    
    // 1. Tell Firebase to add +1 to this specific barber's "bookingClicks"
    updateDoc(doc(db, "barbers", barberId), { 
        bookingClicks: increment(1) 
    }).catch(error => console.error("Error tracking click:", error));

    // 2. Open the Calendly popup
    Calendly.initPopupWidget({ url: url });
    return false;
};

window.onload = () => {
    if(document.getElementById('barber-grid')) {
        window.loadBarbersFromDatabase();
    }
};
