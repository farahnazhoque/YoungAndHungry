const db = require("./firebase");

// Function to sanitize forum title for use as an ID
const sanitizeTitle = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
};

// Function to get the next available reply ID (sequential numbering)
const getNextReplyId = async (forumTitle, parentReplyId = null) => {
  const forumId = sanitizeTitle(forumTitle);
  const ref = parentReplyId
    ? db.ref(`forums/${forumId}/replies/${parentReplyId}/replies`)
    : db.ref(`forums/${forumId}/replies`);

  const snapshot = await ref.once("value");
  const replyCount = snapshot.numChildren() + 1; // Increment by 1

  return parentReplyId ? `${parentReplyId}-${replyCount}` : `${forumId}-${replyCount}`;
};

// Function to add a forum post
const addForumPost = async (title, userId, content) => {
  const forumId = sanitizeTitle(title);
  const ref = db.ref(`forums/${forumId}`);

  await ref.set({
    forum_id: forumId,
    user_id: userId,
    title: title,
    content: content,
    created_at: new Date().toISOString(),
    replies: {} // Initialize replies as an empty object
  });

  console.log("Forum post added successfully with ID:", forumId);
};

// Function to add a reply to a forum post (nested replies supported)
const addReply = async (forumTitle, parentReplyId, userId, content) => {
  const replyId = await getNextReplyId(forumTitle, parentReplyId);
  const forumId = sanitizeTitle(forumTitle);

  const ref = parentReplyId
    ? db.ref(`forums/${forumId}/replies/${parentReplyId}/replies/${replyId}`)
    : db.ref(`forums/${forumId}/replies/${replyId}`);

  await ref.set({
    reply_id: replyId,
    user_id: userId,
    content: content,
    created_at: new Date().toISOString(),
    replies: {} // Initialize replies as an empty object
  });

  console.log("Reply added successfully with ID:", replyId);
};

// Function to fetch a forum post with all its replies
const getForumWithReplies = async (forumTitle) => {
  const forumId = sanitizeTitle(forumTitle);
  const ref = db.ref(`forums/${forumId}`);
  const snapshot = await ref.once("value");

  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No discussions found.");
    return {};
  }
};

// Function to delete a forum post and all its replies
const deleteForumPost = async (forumTitle) => {
  const forumId = sanitizeTitle(forumTitle);
  const ref = db.ref(`forums/${forumId}`);

  await ref.remove();
  console.log(`Forum "${forumTitle}" deleted successfully.`);
};

// Function to delete a top-level reply
const deleteReply = async (forumTitle, replyId) => {
  const forumId = sanitizeTitle(forumTitle);
  const ref = db.ref(`forums/${forumId}/replies/${replyId}`);

  await ref.remove();
  console.log(`Reply "${replyId}" deleted successfully.`);
};

// Function to delete a nested reply
const deleteNestedReply = async (forumTitle, parentReplyId, replyId) => {
  const forumId = sanitizeTitle(forumTitle);
  const ref = db.ref(`forums/${forumId}/replies/${parentReplyId}/replies/${replyId}`);

  await ref.remove();
  console.log(`Nested reply "${replyId}" deleted successfully.`);
};

module.exports = { addForumPost, addReply, getForumWithReplies, deleteForumPost, deleteReply, deleteNestedReply };
