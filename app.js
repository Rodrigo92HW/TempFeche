import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';

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
setInterval(increment, 1000);

function increment() {
    i++;
    document.getElementById('counter').textContent = i;

    update(reference, { number: i })
    .catch(error => console.log(error.message));
}