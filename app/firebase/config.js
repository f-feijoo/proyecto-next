// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwk_rV62vo1z6qw-p5eK63UTTRo7KDDRs",
  authDomain: "coder-next-ea000.firebaseapp.com",
  projectId: "coder-next-ea000",
  storageBucket: "coder-next-ea000.appspot.com",
  messagingSenderId: "383214116664",
  appId: "1:383214116664:web:7cb7fbf1db3d52fd17ebcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app, db}