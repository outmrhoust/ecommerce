import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdWB-EEJdrsLU-o7-ssxDHjuIVM7kslk",
  authDomain: "crwn-clothing-db-c8f67.firebaseapp.com",
  projectId: "crwn-clothing-db-c8f67",
  storageBucket: "crwn-clothing-db-c8f67.appspot.com",
  messagingSenderId: "1073887809054",
  appId: "1:1073887809054:web:5119b2b8f017916d90e80f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })
    }catch(err){
        console.log('there was an error',err.message)
    }

  }
  return userDocRef
};
