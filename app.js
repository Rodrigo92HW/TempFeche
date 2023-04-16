import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

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

let i = 0;
onValue(reference, (snapshot) => {
    // Get the current value of 'number' from the database
    er = snapshot.val() || 0;
    // Update the counter with the current value of 'number'
    document.getElementById('counter').textContent = number;
    // Increment 'i' and set the new value of 'number' in the database
    i = number + 1;
    set(reference, i)
        .catch(error => console.log(error.message));
    // Updates page number
    const data = snapshot.val();
    document.getElementById('counter').textContent = data;
});