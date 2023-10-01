// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hJNtG988NhcAGsEMYhlWyoKIbyGJcNI",
  authDomain: "email-password-authentic-bf00f.firebaseapp.com",
  projectId: "email-password-authentic-bf00f",
  storageBucket: "email-password-authentic-bf00f.appspot.com",
  messagingSenderId: "477133433502",
  appId: "1:477133433502:web:bcdced57a6ec2b4feda98f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;