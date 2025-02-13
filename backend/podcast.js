const db = require("./firebase");

const sanitizeUrl = (url) => {
  return encodeURIComponent(url).replace(/\./g, "_").replace(/\//g, "_");
};

// Function to add a podcast using its link as ID
const addPodcast = async (url, title, description, tags) => {
  const podcastId = sanitizeUrl(url);
  const ref = db.ref(`podcasts/${podcastId}`);

  await ref.set({
    podcast_id: podcastId,
    title: title,
    description: description,
    tags: tags,
    audio_url: url,
    published_at: new Date().toISOString()
  });

  console.log("Podcast added successfully with ID:", podcastId);
};

// Function to get a podcast using its link
const getPodcast = async (url) => {
  const podcastId = sanitizeUrl(url);
  const ref = db.ref(`podcasts/${podcastId}`);
  const snapshot = await ref.once("value");

  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("Podcast not found.");
    return null;
  }
};

// function to delete a podcast
const deletePodcast = async(url) => {
    const podcastId = sanitizeUrl(url);
    const ref = db.ref(`podcasts/${podcastId}`);

    await ref.remove();
    console.log("Podcast successfully deleted!")
}

module.exports = { addPodcast, getPodcast, deletePodcast };
