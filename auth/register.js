import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
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
  const db = getFirestore();

  let registerBtn = document.getElementById("submit");

  let registerForm = async (event) => {
    event.preventDefault();
    let userName = document.getElementById("username").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    // Check if the username and password meet your criteria
    if (!isValidUsername(userName)) {
      alert("Invalid username. Please use only letters and numbers.");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Invalid password. Please use at least 8 characters.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
        alert("login successful");
      let login_capture = new Date();
      let personalData = {
        name: userName,
        email: email,
        password: password,
        timeStamp: login_capture,
      };

      console.log("User created successfully");
      // Adding user data to Firestore

      await setDoc(doc(db, "users/" + user.uid), personalData);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode);
    }
  };
  registerBtn.addEventListener("click", registerForm);

  

  // Function to check if the username is valid
  function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
  }

  // Function to check if the password is valid
  function isValidPassword(password) {
    return password.length >= 8;
  }
});
