alert("Note:1 minute is given for each mcqs");
var database =firebase.database();

/////////////////////////////////////////
let className = sessionStorage.getItem("className");
let subjectName = sessionStorage.getItem("subjectName");
console.log(className+"\n"+subjectName);
///////////////////////////////////////////////////////////
document.getElementById("clas").innerHTML=subjectName;
document.getElementById("sub").innerHTML=className;
///////////////////////////////////////////////////////////
/////////////////////////////////////////

let question_count = 0;
let points = 0;

window.onload = function() {
   show(question_count);
}

  
  function next() {
  firebase.database().ref(`Quiz/${className}/${subjectName}`).on('value',(data)=>{
    var quiz=data.val();
    var keys=Object.keys(quiz);
//console.log(keys.length)
    var key=keys[question_count];
    sessionStorage.setItem("QuestionLength", keys.length);
    var Question=quiz[key].Question;
    var Answer=quiz[key].Answer;

    if (question_count >= keys.length-1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
  //  console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;//yahan answer chek hora ha k sahe ha ya galt point increase k lye
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
//if(subjectName=="Math")
//{
 // setInterval(next,120000); 
//}
setInterval(next,60000);

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
