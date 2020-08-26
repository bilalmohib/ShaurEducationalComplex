var database=firebase.database();
/////////////////////////////////////////////////////////////////////
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
     document.getElementById("user_para").innerHTML = email_id+ " Welcome to the Quiz.";
     
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
//////////////////////////////////////////////////////////////////////



/////////////////////////////////////////
let className = sessionStorage.getItem("className");
let subjectName = sessionStorage.getItem("subjectName");




//This is for check
function check()
{
  var d=document.getElementById("country");
  var txt=d.options[d.selectedIndex].text;
  console.log(txt)
}
//This is for check






function submitForm(e)//e event ka prameter ha jo index se lia ha event b lkh sakte ha kam wo he krega
 {
                                         
      //player name save in seassion storage
    sessionStorage.setItem("name", email_id);//take jab b name chye ho to get name ker k lele hum "name"
window.location.href="selectSendCategory.html";
  }

function submitForm1(e)//e event ka prameter ha jo index se lia ha event b lkh sakte ha kam wo he krega
{
 
                                                      //name ko lia jo b is me hogi value me save hoga
      //player name save in seassion storage
    sessionStorage.setItem("Name", email_id);//take jab b name chye ho to get name ker k lele hum "name"
 window.location.href="SeeData.html"
}

function submitForm2(e)//e event ka prameter ha jo index se lia ha event b lkh sakte ha kam wo he krega
{
  
                                                       //name ko lia jo b is me hogi value me save hoga
       //player name save in seassion storage
     sessionStorage.setItem("Name", email_id);//take jab b name chye ho to get name ker k lele hum "name"
  window.location.href="SeeScore.html"
}
