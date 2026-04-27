// --- 1. IMPORT FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Base64 Image Shrinker
function compressImageToText(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 250; 
                const scaleSize = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.7)); 
            }
        }
    });
}

// --- 4. AUTHENTICATION ---
const loginForm = document.getElementById('auth-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        signInWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('password').value)
            .then(() => window.location.href = "dashboard.html")
            .catch(error => alert("Error logging in: " + error.message));
    });
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const btn = signupForm.querySelector('button');
        btn.innerText = "Creating...";
        btn.disabled = true;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, 
                document.getElementById('signup-email').value, 
                document.getElementById('signup-password').value
            );
            
            await setDoc(doc(db, "barbers", userCredential.user.uid), {
                name: document.getElementById('signup-name').value,
                shop: document.getElementById('signup-shop').value,
                city: document.getElementById('signup-city').value,
                phone: document.getElementById('signup-phone').value,
                calendlyUrl: document.getElementById('signup-calendly').value,
                instagram: "", 
                photoUrl: "https://via.placeholder.com/150?text=Barber",
                address: "", // New Neighborhood field
                startingPrice: "", // New Price field
                status: "active", // New Status field
                isVerified: false, // NEW: Admin control only!
                languages: ["English"], 
                specialty: "Habesha Cuts",
                bookingClicks: 0,
                searchViews: 0,
                createdAt: new Date()
            });

            window.location.href = "dashboard.html"; 
        } catch (error) {
            btn.innerText = "Complete Registration";
            btn.disabled = false;
            alert("Error: " + error.message);
        }
    });
}

if (document.getElementById('logout-btn')) {
    document.getElementById('logout-btn').addEventListener('click', () => {
        signOut(auth).then(() => window.location.href = "login.html");
    });
}

// --- 5. DASHBOARD ---
if (window.location.pathname.includes("dashboard.html")) {
    onAuthStateChanged(auth, async (user) => {
        if (!user) return window.location.href = "login.html";

        const docSnap = await getDoc(doc(db, "barbers", user.uid));
        let currentPhotoUrl = "";
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById('dash-greeting').innerText = data.name || "Barber";
            document.getElementById('stat-clicks').innerText = data.bookingClicks || 0;
            document.getElementById('stat-views').innerText = data.searchViews || 0;
            document.getElementById('stat-revenue').innerText = "$" + ((data.bookingClicks || 0) * 30);
            
            // Populate form
            if(document.getElementById('calendly-link')) document.getElementById('calendly-link').value = data.calendlyUrl || "";
            if(document.getElementById('city-name')) document.getElementById('city-name').value = data.city || "";
            if(document.getElementById('insta-handle')) document.getElementById('insta-handle').value = data.instagram || "";
            
            // NEW: Populate new fields
            if(document.getElementById('starting-price')) document.getElementById('starting-price').value = data.startingPrice || "";
            if(document.getElementById('shop-address')) document.getElementById('shop-address').value = data.address || "";
            if(document.getElementById('availability-status')) document.getElementById('availability-status').value = data.status || "active";
            
            currentPhotoUrl = data.photoUrl || "https://via.placeholder.com/150?text=Barber";
        }

        const profileForm = document.getElementById('profile-form');
        if(profileForm) {
            profileForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = document.getElementById('save-profile-btn');
                btn.innerText = "Saving Profile...";
                btn.disabled = true;

                let finalPhotoUrl = currentPhotoUrl;
                const fileInput = document.getElementById('profile-pic');

                try {
                    if (fileInput.files.length > 0) finalPhotoUrl = await compressImageToText(fileInput.files[0]);

                    // Update DB with new fields
                    await updateDoc(doc(db, "barbers", user.uid), {
                        calendlyUrl: document.getElementById('calendly-link').value,
                        city: document.getElementById('city-name').value,
                        instagram: document.getElementById('insta-handle').value,
                        startingPrice: document.getElementById('starting-price').value,
                        address: document.getElementById('shop-address').value,
                        status: document.getElementById('availability-status').value,
                        photoUrl: finalPhotoUrl 
                    });

                    alert("Profile updated successfully!");
                } catch(err) {
                    alert("Error saving: " + err.message);
                } finally {
                    btn.innerText = "Update Directory Profile";
                    btn.disabled = false;
                }
            });
        }

        const shareBtn = document.getElementById('share-profile-btn');
        if(shareBtn) {
            shareBtn.addEventListener('click', () => {
                const myLink = window.location.origin + window.location.pathname.replace('dashboard.html', 'index.html') + '?barber=' + user.uid;
                navigator.clipboard.writeText(myLink).then(() => {
                    shareBtn.innerText = "✅ Link Copied!";
                    setTimeout(() => shareBtn.innerText = "🔗 Copy My Profile Link", 3000);
                });
            });
        }
    });
}

// --- 6. LIVE DIRECTORY ---
let allBarbers = []; 

window.loadBarbersFromDatabase = async function() {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; 
    grid.innerHTML = '<p style="text-align:center; width:100%;">Loading live directory...</p>';

    try {
        const querySnapshot = await getDocs(collection(db, "barbers"));
        allBarbers = []; 
        querySnapshot.forEach((doc) => {
            allBarbers.push({ id: doc.id, ...doc.data() });
            updateDoc(doc.ref, { searchViews: increment(1) }).catch(e => console.log(e));
        });

        const urlParams = new URLSearchParams(window.location.search);
        const specificBarberId = urlParams.get('barber');
        if(specificBarberId) {
            window.renderBarbers(allBarbers.filter(b => b.id === specificBarberId));
        } else {
            window.renderBarbers(allBarbers);
        }
    } catch (error) {
        grid.innerHTML = '<p>Error loading barbers.</p>';
    }
};

window.renderBarbers = function(barberList) {
    const grid = document.getElementById('barber-grid');
    if(!grid) return; 
    grid.innerHTML = ''; 
   if(barberList.length === 0) {
    grid.innerHTML = `
        <div style="text-align: center; width: 100%; padding: 60px 20px;">
            <p style="font-size: 40px; margin-bottom: 15px;">✂️</p>
            <h3 style="color: var(--text-dark); margin-bottom: 10px;">No barbers found in this city yet.</h3>
            <p style="color: var(--text-light); font-size: 14px;">We're growing fast! Try another city or check back soon.</p>
        </div>
    `;
    return;
}

    barberList.forEach(barber => {
        const card = document.createElement('div');
        card.className = 'barber-card';
        card.style.textAlign = "center"; 
        
        // 1. Instagram Button
        let instaButtonHTML = '';
        if(barber.instagram && barber.instagram.trim() !== "") {
            instaButtonHTML = `<a href="https://instagram.com/${barber.instagram}" target="_blank" class="btn-secondary">View Portfolio</a>`;
        }

        // 2. Verified Blue Checkmark
        let verifiedHTML = barber.isVerified ? `<span class="verified-badge" title="Verified Barber">☑️</span>` : '';

        // 3. Starting Price Tag
        let priceHTML = barber.startingPrice ? `<span class="price-tag">From $${barber.startingPrice}</span>` : '';

        // 4. Google Maps Link
        let mapQuery = encodeURIComponent(`${barber.shop} ${barber.address || ''} ${barber.city}`);
        let locationDisplay = barber.address ? `${barber.address}, ${barber.city}` : barber.city;

        // 5. Availability Status (Disables button if booked)
        let bookingButton = `<button class="btn-primary book-btn" onclick="openCalendly('${barber.calendlyUrl}', '${barber.id}')">Book Now</button>`;
        if (barber.status === "booked") {
            bookingButton = `<button class="btn-primary book-btn btn-disabled" disabled>Fully Booked</button>`;
        }

        card.innerHTML = `
            <img src="${barber.photoUrl || 'https://via.placeholder.com/150?text=Barber'}" alt="${barber.name}" class="barber-avatar">
            <div class="barber-info">
                <h4 style="margin-bottom:5px; display:flex; justify-content:center; align-items:center;">
                    ${barber.name} ${verifiedHTML} ${priceHTML}
                </h4>
                
                <a href="https://maps.google.com/?q=${mapQuery}" target="_blank" class="map-link">📍 ${barber.shop} - ${locationDisplay}</a>
                
                <div class="barber-tags" style="justify-content: center;">
                    <span class="tag">${barber.specialty || "Habesha Barber"}</span>
                </div>
                <div class="action-buttons">
                    ${bookingButton}
                    ${instaButtonHTML}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
};

window.filterBarbers = function() {
    const searchDropdown = document.getElementById('city-search').value.toLowerCase();
    if(searchDropdown === "") {
        window.renderBarbers(allBarbers); 
    } else {
        const filteredList = allBarbers.filter(barber => barber.city && barber.city.toLowerCase().includes(searchDropdown));
        window.renderBarbers(filteredList);
    }
};

window.openCalendly = function(url, barberId) {
    if(!url || url === "") return alert("Booking link missing!");
    updateDoc(doc(db, "barbers", barberId), { bookingClicks: increment(1) }).catch(e => console.error(e));
    Calendly.initPopupWidget({ url: url });
    return false;
};

window.onload = () => {
    if(document.getElementById('barber-grid')) window.loadBarbersFromDatabase();
};

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}
