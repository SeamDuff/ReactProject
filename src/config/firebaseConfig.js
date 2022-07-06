import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOMvFNwz-uvmfv5lMpbv5q6CA4RXCI8W0',
  authDomain: 'sevuchitas-91e4d.firebaseapp.com',
  projectId: 'sevuchitas-91e4d',
  storageBucket: 'sevuchitas-91e4d.appspot.com',
  messagingSenderId: '413252226031',
  appId: '1:413252226031:web:808e07323ff8f0e29f041a',
  measurementId: 'G-6MY07VBT3V'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
