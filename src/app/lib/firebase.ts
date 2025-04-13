import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: 'AIzaSyDli_mf99tQ4nPwgbfYyIaSIczUvpq9PDg',
  authDomain: 'to-do-list-3d72a.firebaseapp.com',
  projectId: 'to-do-list-3d72a',
  storageBucket: 'to-do-list-5964a.firebasestorage.app',
  messagingSenderId: '938715793523',
  appId: '1:801142980524:web:669260c189d60545bdc409',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
