            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
         
            import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
            import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
            import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

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
            const database = getDatabase(app);
            const db = getFirestore(app);





     let registerBtn = document.getElementById('submit');




    registerBtn.addEventListener('click',()=>{


        let userName = document.getElementById("username").value;
        let email = document.getElementById("mail").value;
        let password =document.getElementById("password").value;
      
        
        


   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
        username : userName,
        email: email        
        });
        alert('user created')

     
      
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    console.log(errorCode)
  
  });

   });
})


















   

   
 
 
 