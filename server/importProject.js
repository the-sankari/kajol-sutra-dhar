// importProject.js
const fs = require("fs");
const admin = require("firebase-admin");

// Load your service account key
const serviceAccount = require("./kajol-sutra-dhar-firebase.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get Firestore instance
const db = admin.firestore();

// Load projects JSON
const data = JSON.parse(fs.readFileSync("./projects.json", "utf-8"));
const projects = data.projects;

const importProjects = async () => {
  const batch = db.batch();

  projects.forEach((project) => {
    const docRef = db.collection("projects").doc(project.slug);
    batch.set(docRef, project);
  });

  await batch.commit();
  console.log("✅ Projects imported successfully.");
};

importProjects().catch(console.error);
