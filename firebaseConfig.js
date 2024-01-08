import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCEG-vDLlGP9Lt2Y7K0ZIh_cYVvBCcOdgE",
  authDomain: "vvumarket.firebaseapp.com",
  projectId: "vvumarket",
  storageBucket: "vvumarket.appspot.com",
  messagingSenderId: "983459699971",
  appId: "1:983459699971:web:b95dc05b54b42376d35d36",
  measurementId: "G-8JZDV1L2VY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
}); 

export const googleProvider = new GoogleAuthProvider();
export { auth };
export const db = getFirestore(app);