import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA2H4Bzk8ex2eoI8NRSXEbhvJzNpnLQqhQ",
  authDomain: "my-react-blog-b94a6.firebaseapp.com",
  projectId: "my-react-blog-b94a6",
  storageBucket: "my-react-blog-b94a6.appspot.com",
  messagingSenderId: "875154679036",
  appId: "1:875154679036:web:fa037e470eaec18d7d2379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;