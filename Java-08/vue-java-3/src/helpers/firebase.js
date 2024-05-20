import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhrXeajAyYWCNa6NkfULtCBqaYnoX_cYQ",
    authDomain: "learning-resources-gr1.firebaseapp.com",
    databaseURL: "https://learning-resources-gr1-default-rtdb.firebaseio.com",
    projectId: "learning-resources-gr1",
    storageBucket: "learning-resources-gr1.appspot.com",
    messagingSenderId: "218478290598",
    appId: "1:218478290598:web:d1cf318f5c80ea3e2bb667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }