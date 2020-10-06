var database=firebase.database();

// Initialize the FirebaseUI Widget using Firebase.
var email_id;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    
    var user = firebase.auth().currentUser;

    if(user != null){

      email_id = user.email;
      sessionStorage.setItem("name",user.email)
   //  document.getElementById("user_para").innerHTML = email_id+ " Welcome to the Quiz.";
     
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}



let sendData=()=>{
  let notification=document.getElementById("txtarea").value;

  let head=document.getElementById("head").value;





  let n=sessionStorage.getItem("name");
  
/////////////////////////////////////////////////////////////////////////////////////////
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + times;
dateTime = dateTime.toString();
let Notification = {
  Name:n,
  Heading:head,
  Notification:notification,
  Time: dateTime
}

firebase.database().ref(`Notification/`).set(Notification)

alert("Message Sent")


}


let uploadImage=()=>{
  const ref=firebase.storage().ref();
  const file=document.querySelector("#photo").files[0];
  const name=new Date() + '-' +file.name;

  const metaData={
    contentType:file.type
  }

  const task=ref.child(name).put(file,metaData)

  task
  .then(snapshot=>snapshot.ref.getDownloadURL())
  .then(url=>{
    console.log(url)
    alert("Image Uploaded Successfully")
    const image=document.querySelector('#image')
    image.src=url;
  })

}