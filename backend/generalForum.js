const addGeneralForumPost = async (forumId, userId, title, content) => {
    const ref = db.ref(`forums/${forumId}`);
    await ref.set({
      user_id: userId,
      title: title,
      content: content,
      created_at: new Date().toISOString()
    });
    console.log("General forum post added!");
  };
  