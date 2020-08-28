
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
      document.getElementById("user_para").innerHTML = "Welcome to Quiz Data Entry Portal.You are welcome: " + email_id;
     
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
////////////////////////////////////////////////////////
var clas=document.getElementById("clas").innerHTML=className;
var sub=document.getElementById("sub").innerHTML="Subject: "+subjectName;
////////////////////////////////////////////////////////
if(className==null||subjectName==null)
{
  alert("Please go back and choose the class and the subject to proceed");
  location.href="selectSendCategory.html";
  
}
console.log(className+"\n"+subjectName);



function disableQuiz()
{
 // var key=firebase.database().ref('Quiz/').push().key;
 var Condition={
  Value:false
}
  
  firebase.database().ref(`Condition/${className}/${subjectName}`).set(Condition);
}

function enableQuiz()
{
     // var key=firebase.database().ref('Quiz/').push().key;
  var Condition={
    Value:true
}

firebase.database().ref(`Condition/${className}/${subjectName}`).set(Condition);
}


/////////////////////////////////////////
function sendMesssage()
{

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  dateTime=dateTime.toString();



    //getting the question
    var question=document.getElementById("question").value;
    //getting the options
    var option1=document.getElementById("option1").value;
    var option2=document.getElementById("option2").value;
    var option3=document.getElementById("option3").value;
    var option4=document.getElementById("option4").value;
    //getting the right answer
    var answer=document.getElementById("answer").value;

    if(question==""||option1==""||option2==""||option3==""||option4==""||answer=="")
    {
      alert("Please fill all the fields to submit for the quiz");
      return;
    }
    else if(option1!=answer&&option2!=answer&&option3!=answer&&option4!=answer)
    {
      alert("Please check One of the options of four must be an answer");
      return;      
    }

//console.log(question+"\n"+option1+option2+option3+option4+answer+dateTime);


var key=firebase.database().ref('Quiz/').push().key;
var Quiz={
    Question:question,
    Option1:option1,
    Option2:option2,
    Option3:option3,
    Option4:option4,
    author:email_id,
    Answer:answer,
    Date:dateTime,
}

firebase.database().ref(`Quiz/${className}/${subjectName}/`).push(Quiz);
alert("DATA IS SUBMITTED SUCCESSFULLY.");
var x = window.location.href;
x = x.split( '#' );
window.location.href = x[0];


}
// Listen for form submit
document.getElementById('submit').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();


// Show alert
//document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

}




firebase.database().ref(`Condition/${className}/${subjectName}`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
      var ED=document.getElementById("ED");
      ED.style = "color:red";
      ED.innerHTML=`The subject ${subjectName} of ${className} is currently <b>DISABLED<b>`;
  }
  if (condition == true) {
    var ED=document.getElementById("ED");
    ED.style = "color:green";
    ED.innerHTML=`The subject ${subjectName} of ${className} is <b>ENABLED<b> currently`;
}
});
