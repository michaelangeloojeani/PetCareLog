// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  apiKey: "AIzaSyAgcEkAJRVkETAInpSnppEuoHxzW9UEUVQ",
  authDomain: "pet-care-ebec9.firebaseapp.com",
  projectId: "pet-care-ebec9",
  storageBucket: "pet-care-ebec9.firebasestorage.app",
  messagingSenderId: "35911317743",
  appId: "1:35911317743:web:55d62b1b3f5f7e8caa431a",
  measurementId: "G-QW2CP1DGFB"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);