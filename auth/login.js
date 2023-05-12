import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDUWUJ7wbhD-OVVZPTa-gmCzyU3rvsnRoM",
    authDomain: "fir-article-78fe6.firebaseapp.com",
    projectId: "fir-article-78fe6",
    storageBucket: "fir-article-78fe6.appspot.com",
    messagingSenderId: "987888543020",
    appId: "1:987888543020:web:5111803d284aa891953889",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser;
  const db = getFirestore();



  let login = document.getElementById("form");
  let google = document.getElementById("googleBtn");


  if (user) {
    // User is signed
  } else {
    // No user is signed in.
  }

  const submitForm = async (event) => {
    console.log("submit clicked");
    event.preventDefault();
    let loginEmail = document.getElementById("mail").value;
    let loginPassword = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      let login_capture = new Date();
      updateDoc(doc(db, "users/" + user.uid), {
        last_login: login_capture,
      });
       alert("login successful");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode);
    }
  };

  login.addEventListener("submit", submitForm);

  const googleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      const docRef = doc(db, "users/" + user.uid);
      const docSnap = await getDoc(docRef, token);

      if (!docSnap.exists()) {
      
        setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error.code, error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  };

  google.addEventListener("click", googleClick);

  
});
