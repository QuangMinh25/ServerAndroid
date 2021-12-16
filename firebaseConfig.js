const fs = require("firebase-admin");

var serviceAccount = require("./ho-tro-giao-hang-iuh-firebase-adminsdk-y48f2-64ae4de3de.json");

const firebaseConfig = {
  apiKey: "AIzaSyBgD1dpbyuRUdVPOFe1s61MFwMGdKtASSw",
  authDomain: "ho-tro-giao-hang-iuh.firebaseapp.com",
  projectId: "ho-tro-giao-hang-iuh",
  storageBucket: "ho-tro-giao-hang-iuh.appspot.com",
  messagingSenderId: "16603701765",
  appId: "1:16603701765:web:9cd92b30d35c949fa2f26c",
  measurementId: "G-JHVWB8Q22H",
  credential: fs.credential.cert(serviceAccount),
};

// Initialize Firebase
const firebaseApp = fs.initializeApp(firebaseConfig);
const db = fs.firestore();

module.exports = db;
