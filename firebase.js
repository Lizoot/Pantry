import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDprZOjL_pcouT5odZSwjxoc-gKOf-LBro",
    authDomain: "inventory-management-app-e7b4f.firebaseapp.com",
    projectId: "inventory-management-app-e7b4f",
    storageBucket: "inventory-management-app-e7b4f.appspot.com",
    messagingSenderId: "1033249039980",
    appId: "1:1033249039980:web:c96c04e8db3f1e6d72da49"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };