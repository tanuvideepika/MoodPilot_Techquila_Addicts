import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyDTcw62ynYIZUM4uBwp8B3mkGADhuUtbco",
  authDomain: "maal-fukte-hai.firebaseapp.com",
  projectId: "maal-fukte-hai",
  storageBucket: "maal-fukte-hai.appspot.com",
  messagingSenderId: "322921098043",
  appId: "1:322921098043:web:2a081a864912ec43eba51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)


const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, 'rant'));
const documents = querySnapshot.docs.map(doc => doc.data());
console.log(documents);

const list = document.createElement('ul');

documents.forEach(doc => {
  // console.log(doc);
  // const item = document.createElement('li');
  // item.textContent = JSON.stringify(doc);
  // console.log(JSON.stringify(doc));

  // item.textContent = doc;
  // list.appendChild(item);
  // console.log(list)
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  
  var cell1 = row.insertCell(0);
  //var cell2 = row.insertCell(1);
  cell1.innerHTML = `${doc.user_text}`;
  //cell2.innerHTML =  `${doc.user_mood}`;
});

document.body.appendChild(list);

/////

import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'
const auth = getAuth()
import { query, where } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const q = query(collection(db, "rant"), where("user_id", "==", uid));

    const querySnapshot2 = await getDocs(q);
    querySnapshot2.forEach((doc2) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc2.id, " => ", doc2.data());
    });
    // ...
  } else {
    // User is signed out
    // ...
    console.log("not signed in")

  }
});






// { "user_text": "how bright your dark face is", "user_name": "Devesh Singh", "user_mood": "joy", "user_email": "ismkaking@gmail.com", "user_id": "37ECOEM1r7hUDY63O2cbexzXf723" }
// { "text": "I saw my test scores rightnow.", "activities": ["none"], "mood": "sadness", "time": { "seconds": 1680769996, "nanoseconds": 961000000 }, "userEmail": "livigranger18@gmail.com" }
// { "time": { "seconds": 1680770270, "nanoseconds": 580000000 }, "activities": ["dance"], "text": "I am happy.", "mood": "joy" }
// { "user_mood": "anger", "user_text": "ojfcoiadcnpadncp", "user_email": "saumya@gmail.com", "user_name": "saumya", "user_id": "5IacUqedpRfcyTuXZhGsdUel3743" }
// { "user_id": "37ECOEM1r7hUDY63O2cbexzXf723", "user_email": "ismkaking@gmail.com", "user_text": "i am done", "user_name": "Devesh Singh", "user_mood": "joy" }
// { "user_id": "37ECOEM1r7hUDY63O2cbexzXf723", "user_text": "average rajasthani guy to a child: wow ! wife material", "user_name": "Devesh Singh", "user_email": "ismkaking@gmail.com", "user_mood": "joy" }






// documents.map((item,i)=>{
//   if(){

//   }
// })
