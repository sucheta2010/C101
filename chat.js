

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDodQqmtppBP-dRogJjN9niYuCu-GvA0uE",
  authDomain: "c101-190a4.firebaseapp.com",
  databaseURL: "https://c101-190a4-default-rtdb.firebaseio.com",
  projectId: "c101-190a4",
  storageBucket: "c101-190a4.appspot.com",
  messagingSenderId: "162796756516",
  appId: "1:162796756516:web:35032c04f6d155b6f1c2b1"
};
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
	localStorage.setItem("user_name", user_name);
	window.location = "chat_room.html";
}


