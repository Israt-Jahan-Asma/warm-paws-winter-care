
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYCErSJJ3o4TWmaLhwwGDjhJ5SpMVhn-M",
    authDomain: "warmpaws-pet-care-9fb33.firebaseapp.com",
    projectId: "warmpaws-pet-care-9fb33",
    storageBucket: "warmpaws-pet-care-9fb33.firebasestorage.app",
    messagingSenderId: "419403783205",
    appId: "1:419403783205:web:6ef103eed4d240e6b5b3cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app