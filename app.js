// --- 1. IMPORT FIREBASE (No Storage Needed!) ---
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

// --- 3. INITIALIZE THE APP & SERVICES ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- THE SECRET WEAPON: Image Shrinker (Base64) ---
// This takes a large phone photo, shrinks it, and turns it into text
function compressImageToText(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 250; // Shrink it down to save database space!
                const scaleSize = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                // Return as a compressed JPEG text string
                resolve(canvas.toDataURL('image/jpeg', 0.7)); 
            }
        }
    });
}

// --- 4. AUTHENTICATION LOGIC ---
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
        btn.innerText = "Creating Account...";
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
                photoUrl: "https://via.placeholder.com/150?text=Barber", // Default placeholder
                languages: ["English"], 
                specialty: "Habesha Cuts",
                bookingClicks: 0,
                searchViews: 0,
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

if (document.getElementById('logout-btn')) {
    document.getElementById('logout-btn').addEventListener('click', () => {
        signOut(auth).then(() => window.location.href = "login.html");
    });
}

// --- 5. DASHBOARD DATA & TEXT-IMAGE UPLOADS ---
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
            document.getElementById('stat-revenue').innerText = "$" + ((data.bookingClicks || 0) * 15);
            
            if(document.getElementById('calendly-link')) document.getElementById('calendly-link').value = data.calendlyUrl || "";
            if(document.getElementById('city-name')) document.getElementById('city-name').value = data.city || "";
            if(document.getElementById('insta-handle')) document.getElementById('insta-handle').value = data.instagram || "";
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
                    // THE HACK: If they picked an image, compress it into text!
                    if (fileInput.files.length > 0) {
                        finalPhotoUrl = await compressImageToText(fileInput.files[0]);
                    }

                    await updateDoc(doc(db, "barbers", user.uid), {
                        calendlyUrl: document.getElementById('calendly-link').value,
                        city: document.getElementById('city-name').value,
                        instagram: document.getElementById('insta-handle').value,
                        photoUrl: finalPhotoUrl // Saves the text-image directly to the free database!
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
                    shareBtn.innerText = "✅ Link Copied! Paste in Instagram.";
                    setTimeout(() => shareBtn.innerText = "🔗 Copy My Profile Link", 3000);
                });
            });
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
            allBarbers.push({ id: doc.id, ...doc.data() });
            updateDoc(doc.ref, { searchViews: increment(1) }).catch(e => console.log(e));
        });

        const urlParams = new URLSearchParams(window.location.search);
        const specificBarberId = urlParams.get('barber');

        if(specificBarberId) {
            const specificBarber = allBarbers.filter(b => b.id === specificBarberId);
            window.renderBarbers(specificBarber);
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
        grid.innerHTML = '<p style="text-align:center; width:100%;">No barbers found. Try a different city.</p>';
        return;
    }

    barberList.forEach(barber => {
        const card = document.createElement('div');
        card.className = 'barber-card';
        card.style.textAlign = "center"; 
        
        let instaButtonHTML = '';
        if(barber.instagram && barber.instagram.trim() !== "") {
            instaButtonHTML = `<a href="https://instagram.com/${barber.instagram}" target="_blank" class="btn-secondary">View Portfolio</a>`;
        }

        card.innerHTML = `
            <img src="${barber.photoUrl || 'https://via.placeholder.com/150?text=Barber'}" alt="${barber.name}" class="barber-avatar">
            <div class="barber-info">
                <h4 style="margin-bottom:2px;">${barber.name}</h4>
                <p class="barber-shop">${barber.shop} - ${barber.city}</p>
                <div class="barber-tags" style="justify-content: center;">
                    <span class="tag">${barber.specialty || "Habesha Barber"}</span>
                </div>
                <div class="action-buttons">
                    <button class="btn-primary" onclick="openCalendly('${barber.calendlyUrl}', '${barber.id}')">Book Now</button>
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
    if(!url || url === "") {
        alert("This barber hasn't set up their booking link yet!");
        return false;
    }
    updateDoc(doc(db, "barbers", barberId), { bookingClicks: increment(1) }).catch(error => console.error(error));
    Calendly.initPopupWidget({ url: url });
    return false;
};

window.onload = () => {
    if(document.getElementById('barber-grid')) window.loadBarbersFromDatabase();
};

// Mobile Hamburger Menu
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
