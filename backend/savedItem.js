const saveItem = async (userId, itemType, itemId) => {
    const ref = db.ref(`saved_items/${userId}/${itemId}`);
    await ref.set({
      item_type: itemType,
      saved_at: new Date().toISOString()
    });
    console.log("Item saved successfully!");
  };
  
  // Example: Save a podcast
  saveItem("user_123", "podcast", "podcast_001");
  