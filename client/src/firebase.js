// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'sneak-check-41fc6.firebaseapp.com',
  projectId: 'sneak-check-41fc6',
  storageBucket: 'sneak-check-41fc6.appspot.com',
  messagingSenderId: '547236823921',
  appId: '1:547236823921:web:1204ddf7641acf30de2cd0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
