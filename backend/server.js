const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Your Firebase key

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://younghungrypodcant-default-rtdb.firebaseio.com/"
});

const db = admin.database();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5001;

// Importing all functions
const {addUser, getUser, deleteUser} = require("./user");
const {addPodcast, getPodcast, deletePodcast} = require("./podcast");
const {addForumPost, addReply, getForumWithReplies, deleteForumPost, deleteReply, deleteNestedReply} = require("./forum");
const {saveItem, getSavedItems, deleteSavedItems} = require("./savedItem");


// ==========================
// ✅ USERS ENDPOINTS
// ==========================

// Create a user
app.post("/users", async (req, res) => {
    try {
        const {email, fullName, role} = req.body;
        await addUser(email, fullName, role);
        res.status(201).json({message: "User created", email});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get a user by email
app.get("/users/:email", async (req, res) => {
    try {
        const user = await getUser(req.params.email);
        user ? res.json(user) : res.status(404).json({message: "User not found"});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Delete a user
app.delete("/users/:email", async (req, res) => {
    try {
        await deleteUser(req.params.email);
        res.json({ message: "User deleted successfully"});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

// ==========================
// ✅ PODCASTS ENDPOINTS
// ==========================

// Add a podcast
app.post("/podcasts", async (req, res) => {
    try {
        const {url, title, description, tags} = req.body;
        await addForumPost(url, title, description, tags);
        res.status(201).json({message: "Podcast added", url});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get a podcast by URL
app.get("/podcasts/:url", async (req, res) => {
    try {
        const podcast = await getPodcast(req.params.url);
        podcast ? res.json(podcast) : res.status(404).json({message: "Podcast not found"});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Delete a podcast
app.delete("/podcasts/:url", async (req,res) => {
    try {
        await deletePodcast(req.params.url);
        res.json({message: "Podcast deleted successfully"});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
})

// ==========================
// ✅ FORUM ENDPOINTS
// ==========================

// Create a forum post
app.post("/forums", async (req, res) => {
    try {
      const { title, userId, content } = req.body;
      await addForumPost(title, userId, content);
      res.status(201).json({ message: "Forum post created", title });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get a forum post with all replies
  app.get("/forums/:title", async (req, res) => {
    try {
      const forum = await getForumWithReplies(req.params.title);
      forum ? res.json(forum) : res.status(404).json({ message: "Forum not found" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Add a reply to a forum post
  app.post("/forums/:title/replies", async (req, res) => {
    try {
      const { userId, content, parentReplyId } = req.body;
      await addReply(req.params.title, parentReplyId, userId, content);
      res.status(201).json({ message: "Reply added" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a forum post
  app.delete("/forums/:title", async (req, res) => {
    try {
      await deleteForumPost(req.params.title);
      res.json({ message: "Forum post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a top-level reply
  app.delete("/forums/:title/replies/:replyId", async (req, res) => {
    try {
      await deleteReply(req.params.title, req.params.replyId);
      res.json({ message: "Reply deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a nested reply
  app.delete("/forums/:title/replies/:parentReplyId/:replyId", async (req, res) => {
    try {
      await deleteNestedReply(req.params.title, req.params.parentReplyId, req.params.replyId);
      res.json({ message: "Nested reply deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // ==========================
  // ✅ SAVED ITEMS ENDPOINTS
  // ==========================
  
  // Save an item
  app.post("/savedItems", async (req, res) => {
    try {
      const { userId, itemType, itemId } = req.body;
      await saveItem(userId, itemType, itemId);
      res.status(201).json({ message: "Item saved successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get saved items for a user
  app.get("/savedItems/:userId", async (req, res) => {
    try {
      const items = await getSavedItems(req.params.userId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a saved item
  app.delete("/savedItems/:userId/:itemId", async (req, res) => {
    try {
      await deleteSavedItem(req.params.userId, req.params.itemId);
      res.json({ message: "Saved item deleted successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // ==========================
  // ✅ START SERVER
  // ==========================
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });