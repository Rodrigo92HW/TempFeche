import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAsHqXAhdRYJCocmHT9TD2JuB_9O-sRjcM",
    authDomain: "feche-e1193.firebaseapp.com",
    projectId: "feche-e1193",
    storageBucket: "feche-e1193.appspot.com",
    messagingSenderId: "236658476401",
    appId: "1:236658476401:web:a134e83748e7b68d0be2d0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db, 'number');

// Initialize counter value to 0
let counterValue = 0;

// Listen for changes to the 'number' value in the database
onValue(reference, (snapshot) => {
    // Update the counter value with the current value from the database
    counterValue = snapshot.val() || 0;
    document.getElementById('counter').textContent = counterValue;
});

// Increment the counter value and update the database every second
setInterval(() => {
    counterValue++;
    set(reference, counterValue).catch(error => console.log(error.message));
}, 1000);