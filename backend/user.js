const db = require("./firebase");

const sanitizeEmail = (email) => {
  return email.replace(/\./g, "_");
};

// Function to add a user
const addUser = async (email, fullName, role) => {
  const userId = sanitizeEmail(email);  // Use sanitized email as user ID
  const ref = db.ref(`users/${userId}`);

  await ref.set({
    full_name: fullName,
    email: email,
    role: role,  // "parent" or "teacher"
    created_at: new Date().toISOString()
  });

  console.log("User added successfully with ID:", userId);
};

const getUser = async (email) => {
    const userId = sanitizeEmail(email);
    const ref = db.ref(`users/${userId}`);
    const snapshot = await ref.once("value");
  
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("User not found.");
      return null;
    }
  };

  const deleteUser = async (email) => {
    const userId = sanitizeEmail(email);
    const ref = db.ref(`users/${userId}`);
  
    await ref.remove();
    console.log("User deleted:", userId);
  };

module.exports = {addUser, getUser, deleteUser};