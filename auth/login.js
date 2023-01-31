 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getAuth, signInWithEmailAndPassword,  signOut, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
 import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
          

 

document.addEventListener("DOMContentLoaded", function(){
   
            const firebaseConfig = {
                apiKey: "AIzaSyDvxLClh-5Fkj_HIxI6CVBwOe6N86908TA",
                authDomain: "social-media-login-c7fdc.firebaseapp.com",
                databaseURL: "https://social-media-login-c7fdc-default-rtdb.firebaseio.com",
                projectId: "social-media-login-c7fdc",
                storageBucket: "social-media-login-c7fdc.appspot.com",
                messagingSenderId: "187236862539",
                appId: "1:187236862539:web:8645436883449bad989bce",
                measurementId: "G-KKX2EVH7XF"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app); 
            const auth = getAuth(app);
            const user = auth.currentUser;
            const database = getDatabase(app);
            const provider = new GoogleAuthProvider(app);
            const provider2 = new FacebookAuthProvider(app);



let logOut = document.getElementById('logout');
let login = document.getElementById('my-form');
let notLoggedIn = document.getElementById('not-logged-in');
let LoggedIn = document.getElementById('logged-in');
let google = document.getElementById("googleBtn");
let facebook = document.getElementById("facebookBtn");



// if (user) {
//   // User is signed
//   LoggedIn.style.display = 'block';
//   notLoggedIn.style.display = 'none';


// } else {
//   // No user is signed in.
//   LoggedIn.style.display = 'none';
//   notLoggedIn.style.display = 'block';
// }



// login.addEventListener("submit",(event)=>{

// event.preventDefault();       
// let loginEmail = document.getElementById('email').value;
// let loginPassword = document.getElementById('password').value;

//    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   .then((userCredential) => {
  
//     const user = userCredential.user;
//     let login_capture = new Date();
//      update(ref(database, 'users/' + user.uid), {
//     last_login: login_capture
//   });

//    LoggedIn.style.display = 'block';
//    notLoggedIn.style.display = 'none';
//    document.getElementById('display').innerHTML = 'welcome back,'+' '+loginEmail+' ' + 'successfully logged in'
//     alert('login successful');
   
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     console.log(errorMessage);
//     console.log(errorCode)
//   });

// });

// logOut.addEventListener('click',()=>{ 
            
       
//         const auth = getAuth();
//         signOut(auth).then(() => {
//         // Sign-out successful.
//         //  LoggedIn.style.display = 'none';
//         //  notLoggedIn.style.display = 'block';
//         }).catch((error) => {
//         // An error happened.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage)
   
//         console.log(errorCode)
  
//         });

        


//   });

    google.addEventListener('click',(event)=>{
    console.log('google clicked')


    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert('login successful');
   
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });


      





   });


   facebook.addEventListener('click', (event) => {
    signInWithPopup(auth, provider2)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
     alert('login successful');
     

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    alert(errorMessage)

    // ...
  });
   })

       


    
})
