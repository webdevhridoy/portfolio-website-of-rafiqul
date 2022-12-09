// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt3yq_ctPG3VOxvkQ8IGCCYCOvhchentY",
    authDomain: "dashboard-portfolio-website.firebaseapp.com",
    projectId: "dashboard-portfolio-website",
    storageBucket: "dashboard-portfolio-website.appspot.com",
    messagingSenderId: "309392634662",
    appId: "1:309392634662:web:38fd7ac38b60858856c7e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;