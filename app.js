const app = window.firebase.initializeApp(firebaseConfig);
const db = window.firebase.database();
const reference = db.ref('number');

// Set the initial value of 'number' in the database to 0
reference.set(0)
    .catch(error => console.log(error.message));

let i = 0;
reference.on('value', (snapshot) => {
    // Get the current value of 'number' from the database
    const number = snapshot.val() || 0;
    // Update the counter with the current value of 'number'
    document.getElementById('counter').textContent = number;
    // Increment 'i' and set the new value of 'number' in the database
    i = number + 1;
    reference.set(i)
        .catch(error => console.log(error.message));
});