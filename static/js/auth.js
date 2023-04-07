import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'

const auth = getAuth()

// Sign up
let signup = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    console.log(email, password, name)

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://m.economictimes.com/thumb/msid-66101587,width-1200,height-900,resizemode-4,imgsize-676295/cannabis-bcc.jpg"
            })
            document.location.href = "/";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            // ..
        });
}
// Sign In
const signin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            document.location.href = "/";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

// Signout
const signout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

// display User Info 


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      document.getElementById("profilePhoto").setAttribute("src",photoURL);
      document.getElementById("displayName").innerText = displayName;

      document.getElementById("login").style.display= "none";
      document.getElementById("logoutBtn").style.display= "block";


    //   document.getElementById("photoUrl").innerText = displayName;

    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }else{
        // user is logged out
        document.getElementById("profilePhoto").setAttribute("src","");
        document.getElementById("profilePhoto").style.display = "none";

        document.getElementById("displayName").innerText = "";
        document.getElementById("login").style.display= "block";
        document.getElementById("logoutBtn").style.display= "none";
    }
    
  });



try {document.getElementById("registerBtn").addEventListener("click", signup);} catch (error) {}
try {document.getElementById("loginBtn").addEventListener("click", signin);} catch (error) {}
try {document.getElementById("logoutBtn").addEventListener("click", signout);} catch (error) {}


