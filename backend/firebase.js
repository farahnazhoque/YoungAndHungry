const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Ensure this file exists

// Prevent multiple Firebase initializations
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://younghungrypodcant-default-rtdb.firebaseio.com/" // Update with your database URL
  });
}

const db = admin.database();
module.exports = db;
