var database = firebase.database();
////////////////////////////////////////////////////////////////////
// Initialize the FirebaseUI Widget using Firebase.
var email_id;

let user_name = sessionStorage.getItem("Name");
console.log(user_name);
if (user_name == "mohib2156@gmail.com"||user_name=="ambertahir303@gmail.com") {
  alert(`Welcome ${user_name}`);
  user_name = "";
}
else{
  alert("Access Denied Only Administrator can access");
  logout();
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome to Quiz Data Entry Portal.You are welcome: " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  while (userEmail != "mohib2156@gmail.com" && userEmail!="ambertahir303@gmail.com") {
    logout();
    alert("You are not the right person to access this");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();
}
//////////////////////////////////////////////////////////////////////



/////////////////////////////////////////
let className = sessionStorage.getItem("className");
let subjectName = sessionStorage.getItem("subjectName");
////////////////////////////////////////////////////////
var clas = document.getElementById("clas").innerHTML = className;
var sub = document.getElementById("sub").innerHTML = "Subject: " + subjectName;
////////////////////////////////////////////////////////
while (className == "" || subjectName == "") {
  alert("Please go back and choose the class and the subject to proceed");
}
console.log(className + "\n" + subjectName);


function disableQuiz() {

  var Condition = {
    Value: false
  }

  firebase.database().ref(`Condition/${className}/${subjectName}`).set(Condition);
}

function enableQuiz() {

  var Condition = {
    Value: true
  }
  firebase.database().ref(`Condition/${className}/${subjectName}`).set(Condition);
}



var ref = database.ref(`Score/${className}/${subjectName}`);
ref.once('value', gotData, errData);


function gotData(data) {
  //console.log(data.val());
  var tod = data.val();
  var keys = Object.keys(tod);



  for (var i = 0; i < keys.length; i++) {


    var k = keys[i];
    var ins = k.toString()
    var Name = tod[k].Name;
    var Class = tod[k].Class;
    var Subject = tod[k].Subject;
    var Score = tod[k].Score;
    var Date = tod[k].Time;
    var totalQuestions = tod[k].totalQuestions;
    var TimeSpent = tod[k].TimeSpent;
    TimeSpent = parseFloat(TimeSpent);
    var TimeSpentInMinutes = (TimeSpent / 60);


    totalQuestions = parseInt(totalQuestions);

    var score = parseFloat(Score);


    var percentage = (score / totalQuestions) * 100;


    console.log(percentage);






    let status = false;
    var result;


    if (percentage >= 50) {
      status = true;
      result = "PASSED";
    }
    else {
      result = "FAIL";
      status = false;
    }


    //create li text node
    var li = document.createElement("li");


    //create element span

    var para = document.createElement("div");
    para.setAttribute("id", "para");
    para.innerHTML = `<b>Name: </b>${Name} </br>
   <b>Class: </b> ${Class}</br>
   <b>Subject: </b> ${Subject}</br>
   <b>Obtained Score: </b> ${score}</br>
   <b>Total Questions: </b> ${totalQuestions}</br>
   <b>Percentage: </b> ${percentage}%</br>
   <b>Status: </b> ${result}</br>
    <b>Time taken: </b> ${TimeSpentInMinutes} Minutes</br>
    <b>Test Given AT: </b> ${Date}</br>
   `;

    li.appendChild(para);


    var para1 = document.createElement("span");
    para1.setAttribute("id", "para1");
    para1.innerHTML = ins;
    li.appendChild(para1);


    //create delete button
    var delBtn = document.createElement("button");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.innerHTML = "DELETE";
    delBtn.setAttribute("id", "deleteButton");

    var buttons = document.createElement("div");
    buttons.setAttribute("id", "buttonDiv")


    buttons.appendChild(delBtn);
    buttons.appendChild(para1);

    li.appendChild(buttons);

    var list = document.getElementById("list");
    list.appendChild(li);


  }
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}







function deleteItem(e) {
  // console.log(e.parentNode.childNodes[1].innerHTML);
  var val = e.parentNode.childNodes[1].innerHTML;
  console.log(val);
  let userRef = this.database.ref(`Score/${className}/${subjectName}/${val}`);
  userRef.remove();
  //refresh
  var x = window.location.href;
  x = x.split('#');
  window.location.href = x[0];
}


function deleteAll() {
  let userRef = this.database.ref(`Score/${className}/${subjectName}`);
  userRef.remove()
  //refreshing the page there is error in firebase i will tell you if you remove this 3 lines then check whats the error
  var x = window.location.href;
  x = x.split('#');
  window.location.href = x[0];
}


firebase.database().ref(`Condition/${className}/${subjectName}`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    var ED = document.getElementById("ED");
    ED.style = "color:red";
    ED.innerHTML = `The subject ${subjectName} of ${className} is currently <b>DISABLED<b>`;
  }
  if (condition == true) {
    var ED = document.getElementById("ED");
    ED.style = "color:green";
    ED.innerHTML = `The subject ${subjectName} of ${className} is <b>ENABLED<b> currently`;
  }
});





function showHistory() 
{
let StudentEmail=document.getElementById("historymail").value;

if(StudentEmail=="")
{
  alert("Please enter the student email to see his/her history");
  return;
}

  let res = StudentEmail.replace("@", "");
  res = res.replace(".", "");

  console.log(res)

  //This is the perfect way to retrieve data leaving all the dull ways of youtubers now
  let studentRecord = database.ref(`HistoryTrack/${className}/${subjectName}/${res}`);
  studentRecord.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      // console.log(childData.message)
      res="";
      console.log(res)

      //Student Info
      let StudentName = document.createTextNode('Student Name: ' + childData.Name);
      let StudentClass = document.createTextNode('Class: ' + childData.Class);
      let StudentSubject = document.createTextNode('Subject: ' + childData.Subject);
      //Student Info
      let QuestionAt = document.createTextNode('Question At : ' + childData.QuestionAt);
      let CorrectAnswer = document.createTextNode('Correct Answer : ' + childData.CorrectAnswer);
      let WrongAnswer = document.createTextNode('Wrong Answer: ' + childData.WrongAnswer);
      //Time
      let TimeDone = document.createTextNode('Date: ' + childData.Time);

      let ult = document.getElementById("scoreList");
      let lit = document.createElement("li");
      lit.setAttribute('class', 'uls');
      lit.appendChild(StudentName);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(StudentClass);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(StudentSubject);


      lit.appendChild(document.createElement('br'));
      lit.appendChild(QuestionAt);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(CorrectAnswer);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(WrongAnswer);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(TimeDone);

      lit.appendChild(document.createElement('br'));
      ult.appendChild(lit);

      //Hey this is
    });
  });
  //This is the perfect way to retrieve data leaving all the dull ways of youtubers now
}


//For getting the students feedback

window.onload=()=>{

  //This is the perfect way to retrieve data leaving all the dull ways of youtubers now

  //This is the perfect way to retrieve data leaving all the dull ways of youtubers now
  let studentFeedBack = database.ref(`FeedBack/${className}/${subjectName}/`);
  studentFeedBack.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      // console.log(childData.message)

      //Student Info
      let StudentName = document.createTextNode('Student Name: ' + childData.Name);
      let StudentClass = document.createTextNode('Class: ' + childData.Class);
      let StudentSubject = document.createTextNode('Subject: ' + childData.Subject);
      //Student Info
      let Comment = document.createTextNode('Comment : ' + childData.Opinion);
           //Time
      let Time = document.createTextNode('Date: ' + childData.Time);

      let ult = document.getElementById("FeedList");
      let lit = document.createElement("li");
      lit.setAttribute('class', 'ulsu');
      lit.appendChild(StudentName);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(StudentClass);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(StudentSubject);


      lit.appendChild(document.createElement('br'));
      lit.appendChild(Comment);
      lit.appendChild(document.createElement('br'));
      lit.appendChild(Time);
      lit.appendChild(document.createElement('br'));
    
      ult.appendChild(lit);



      //Hey this is
    });
  });

  //This is the perfect way to retrieve data leaving all the dull ways of youtubers now
  
  
    


}
//This is for feed back


