alert("One Minute for each MCQS of ALL THE Subjects\nTwo Minutes for each MCQS of For MATH Subject");
var database =firebase.database();


let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);






let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
var user_name = sessionStorage.getItem("name");
    document.querySelector("span.name").innerHTML = user_name;


/////////////////////////////////////////
var className = sessionStorage.getItem("className");
var subjectName = sessionStorage.getItem("subjectName");
if(className==null||subjectName==null)
{
  alert("Please go back and choose the class and the subject to proceed");
  location.href="selectQuizCategory.html";
}
console.log(className+"\n"+subjectName);
///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+times;
  dateTime=dateTime.toString();
var User={
    Name:user_name,
    Class:className,
    Subject:subjectName,
    Time:dateTime
}

firebase.database().ref(`AnonymousUser`).push(User);












document.getElementById("clas").innerHTML=subjectName;
document.getElementById("sub").innerHTML=className;
///////////////////////////////////////////////////////////
/////////////////////////////////////////

let question_count = 0;
let points = 0;

window.onload = function() {
   show(question_count);
}


var timerCount;

if(subjectName=="Math")
{
  timerCount=setInterval(next,120000); 
}
else
{
  timerCount=setInterval(next,60000);
}


  
  function next() {
    clearInterval(timerCount);   
if(subjectName=="Math")
{
  timerCount=setInterval(next,120000); 
}
else
{
  timerCount=setInterval(next,60000);
}
  firebase.database().ref(`Quiz/${className}/${subjectName}`).on('value',(data)=>{
    var quiz=data.val();
    var keys=Object.keys(quiz);
          /////////////////////////////////////////////////////////////
    var totalQuestions=keys.length;//Total Questions sending
    ////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////
  sessionStorage.setItem("QuestionLength",totalQuestions);
  ////////////////////////////////////////////////////
console.log(keys.length)
    var key=keys[question_count];
    var Question=quiz[key].Question;
    var Answer=quiz[key].Answer;

    if (question_count >= keys.length-1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  

    var optionObtained;

    var user_answer;

    console.log(optionObtained);

    var promise=new Promise(function(resolve,reject){
      optionObtained=document.querySelector("li.option.active");
  
      if(optionObtained!=null){
          resolve("The user selected the answer");
          user_answer = optionObtained.innerHTML;
      }
      else{
          reject("The answer was not selected");
          user_answer="";
      }
  })
  
  promise.then(function(data){
  console.log(data)
  })
  .catch(function(err){
     console.log(err)
  })

    
    // check if the answer is right or wrong
    if (user_answer == Answer) {
      points += 10;
      
      sessionStorage.setItem("points", points);
     
    }
   // console.log(points);
  
    question_count++;
    show(question_count);
    //console.log(keys);
    
  });
  }
  


  function show(count) {
  //  let question=document.getElementById("question");
    let question = document.getElementById("questions");
  

    firebase.database().ref(`Quiz/${className}/${subjectName}/`).on('value',(data)=>{
      var quiz=data.val();
      var keys=Object.keys(quiz);
  
      var key=keys[question_count];
      var Question=quiz[key].Question;
      var Option1=quiz[key].Option1;
      var Option2=quiz[key].Option2;
      var Option3=quiz[key].Option3;
      var Option4=quiz[key].Option4;
      var Author=quiz[key].author;

      question.innerHTML = `
      <h2>Q${count + 1}. ${Question}</h2>
       <ul class="option_group">
      <li class="option">${Option1}</li>
      <li class="option">${Option2}</li>
      <li class="option">${Option3}</li>
      <li class="option">${Option4}</li>
    </ul>`;
      toggleActive();   
  
      //console.log(keys);
    });

  }

  


  function toggleActive() {
 

    firebase.database().ref(`Quiz/${className}/${subjectName}`).on('value',(data)=>{
      let option = document.querySelectorAll("li.option");

      var quiz=data.val();
    //  console.log(quiz);
      var keys=Object.keys(quiz);
  
      var key=keys[question_count];
      var Question=quiz[key].Question;
      var Option1=quiz[key].Option1;
      var Option2=quiz[key].Option2;
      var Option3=quiz[key].Option3;
      var Option4=quiz[key].Option4;
 
      for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
          for (let i = 0; i < option.length; i++) {
            if (option[i].classList.contains("active")) {
              option[i].classList.remove("active");
            }
          }
          option[i].classList.add("active");
        };
      }


      //console.log(keys);
    });
  }


