var database =firebase.database();

let user_name = sessionStorage.getItem("name");
let user_name1 = sessionStorage.getItem("name1");

let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
let totalQuestions=sessionStorage.getItem("QuestionLength");


user_points=parseInt(user_points);
user_points=user_points/10;

    document.querySelector("span.name").innerHTML = user_name;
    document.querySelector("span.points").innerHTML = `${user_points} OUT OF ${totalQuestions}`;
    document.querySelector("span.time_taken").innerHTML = `:${user_time} seconds`;

    

    let className = sessionStorage.getItem("className");
let subjectName = sessionStorage.getItem("subjectName");
////////////////////////////////////////////////////////
var clas=document.getElementById("clas").innerHTML=className;
var sub=document.getElementById("sub").innerHTML="Subject: "+subjectName;
////////////////////////////////////////////////////////





//This is This is This is This is score sending
//function sendMesssage()
//{
//   var text1=document.getElementById("prima");
//   var text2;
// console.log(text1.childNodes)
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  dateTime=dateTime.toString();




//console.log(question+"\n"+option1+option2+option3+option4+answer+dateTime);


var key=firebase.database().ref('Score/').push().key;
var Score={
    Name:user_name,
    Class:className,
    Subject:subjectName,
    totalQuestions:totalQuestions,
    Score:user_points,
    TimeSpent:user_time,
    Time:dateTime
}

firebase.database().ref(`Score/${className}/${subjectName}/`).push(Score);


