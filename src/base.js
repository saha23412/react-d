import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD7Bm3F97icyOMkQkufhn1ZCSg86uTwIcY",
    authDomain: "fir-tutorial-3eb32.firebaseapp.com",
    projectId: "fir-tutorial-3eb32",
    storageBucket: "fir-tutorial-3eb32.appspot.com",
    messagingSenderId: "57026916726",
    appId: "1:57026916726:web:9d001596caa77e94ad0a57",
    measurementId: "G-8GS0MWZCMJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
export { auth, db, storage }