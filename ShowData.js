var database=firebase.database();
/////////////////////////////////////////////////////////////////////
// Initialize the FirebaseUI Widget using Firebase.
var email_id;

let user_name = sessionStorage.getItem("Name");
console.log(user_name);

if(user_name=="mohib2156@gmail.com")
{
  alert("Welcome Sir");
  user_name="";
}
else
{
  alert("You are not allowed sorry")
  logout();
}

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

  while(userEmail!="mohib2156@gmail.com")
  {
    logout();
       alert("You are not the right person to access this");
       return;
  }

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
while(className==""||subjectName=="")
{
  alert("Please go back and choose the class and the subject to proceed");
}
console.log(className+"\n"+subjectName);


function disableQuiz()
{

 var Condition={
  Value:false
}
  
  firebase.database().ref(`Condition/${className}/${subjectName}`).set(Condition);
}

function enableQuiz()
{
   
  var Condition={
    Value:true
}

firebase.database().ref(`Condition/${className}/${subjectName}`).set(Condition);
}


var ref = database.ref(`Quiz/${className}/${subjectName}`);
ref.once('value',gotData,errData);


function gotData(data)
{
    //console.log(data.val());
    var tod=data.val();
    var keys=Object.keys(tod);

 
 
    for(var i=0;i<keys.length;i++)
    {


        var k=keys[i];
        var ins=k.toString()
        var Question=tod[k].Question;
        var Author=tod[k].author;
        var Option1=tod[k].Option1;
        var Option2=tod[k].Option2;
        var Option3=tod[k].Option3;
        var Option4=tod[k].Option4;
        var Answer=tod[k].Answer;
        var Time=tod[k].Date;




        //create li text node
    var li=document.createElement("li");
    

    //create element span

    var para=document.createElement("div");
    para.setAttribute("id","para");
   para.innerHTML=`<b>Question:-</b>${Question} </br>
   <b>Option1:</b> ${Option1}</br>
   <b>Option2:</b> ${Option2}</br>
   <b>Option3:</b> ${Option3}</br>
   <b>Option4:</b> ${Option4}</br>
   <b>Answer:</b> ${Answer}</br>
    <b>Author:</b> ${Author}</br>
    <b>Time Submitted:</b> ${Time}</br>
   `;

    li.appendChild(para);


    var para1=document.createElement("span");
    para1.setAttribute("id","para1");
   para1.innerHTML=ins;
    li.appendChild(para1);


    //create delete button
    var delBtn=document.createElement("button");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.innerHTML="DELETE";
    delBtn.setAttribute("id","deleteButton");
    
var buttons=document.createElement("div");
buttons.setAttribute("id","buttonDiv")

    //create edit Button
    var editBtn=document.createElement("button");
  editBtn.innerHTML="EDIT";
    editBtn.setAttribute("id","editButton");
    editBtn.setAttribute("onclick","editItem(this)");

buttons.appendChild(editBtn);
buttons.appendChild(delBtn);
buttons.appendChild(para1);

li.appendChild(buttons);

      var list=document.getElementById("list");
      list.appendChild(li);


    }
}

function errData(err){
    console.log('Error!');
    console.log(err);
}








function deleteItem(e)
{
  console.log(e.parentNode.childNodes[2].innerHTML);

    var val=e.parentNode.childNodes[2].innerHTML;
    console.log(val);
    let userRef = this.database.ref(`Quiz/${className}/${subjectName}/${val}`);
    userRef.remove()
    //refresh
    var x = window.location.href;
    x = x.split( '#' );
    window.location.href = x[0];
}


function deleteAll()
{
    let userRef = this.database.ref(`Quiz/${className}/${subjectName}`);
    userRef.remove()
    //refreshing the page there is error in firebase i will tell you if you remove this 3 lines then check whats the error
    var x = window.location.href;
    x = x.split( '#' );
    window.location.href = x[0];
}

var val;

var question;
//getting the options
var option1;
var option2;
var option3;
var option4;
var dateTime;
//getting the right answer
var answer;
function modal()
{
   document.getElementById("modal").style="display:none;";
     
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    dateTime = date+' '+time;
    dateTime=dateTime.toString();

   
    console.log(val);
    let userRef = this.database.ref(`Quiz/${className}/${subjectName}/${val}`);
    



    //getting the question
    question=document.getElementById("question").value;
    //getting the options
    option1=document.getElementById("option1").value;
    option2=document.getElementById("option2").value;
    option3=document.getElementById("option3").value;
    option4=document.getElementById("option4").value;
    //getting the right answer
    answer=document.getElementById("answer").value;

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

console.log(question+"\n"+option1+option2+option3+option4+answer+dateTime);

userRef.update({
  Question:question,
  Option1:option1,
  Option2:option2,
  Option3:option3,
  Option4:option4,
  author:email_id,
  Answer:answer,
  Date:dateTime,
});


// refreshing the page there is error in firebase i will tell you if you remove this 3 lines then check whats the error
    var x = window.location.href;
    x = x.split( '#' );
    window.location.href = x[0];
}


function editItem(e)
{
    document.getElementById("modal").style="display:block;";
     
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    dateTime=dateTime.toString();

    val=e.parentNode.childNodes[2].innerHTML;
    console.log(val);
    let userRef = this.database.ref(`Quiz/${className}/${subjectName}/${val}`);
    
console.log(input);
userRef.update({
  Question:question,
  Option1:option1,
  Option2:option2,
  Option3:option3,
  Option4:option4,
  author:email_id,
  Answer:answer,
  Date:dateTime,
});


  //refreshing the page there is error in firebase i will tell you if you remove this 3 lines then check whats the error
//     var x = window.location.href;
// x = x.split( '#' );
// window.location.href = x[0];
}

//canel function implementation
function cancel()
{
    document.getElementById('modal').style="display:none;";
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
