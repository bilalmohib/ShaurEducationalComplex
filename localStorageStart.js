var className;
var subjectName;

var check1 = false;
var check2 = false;
var check3 = false;
let user_name = sessionStorage.getItem("name");
console.log("The user name getted from the login students authentication: ", user_name + "\n");




///////////////////////////////////////////////////////////////////////////////////////////


//Class 3
firebase.database().ref(`Condition/Class III/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english3").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class III/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math3").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class III/Science`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("science3").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class III/Social Studies`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ss3").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class III/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu3").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class III/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat3").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class III/ICT`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ict3").style = "display:none";
  }
});
//Class3


//Class4
firebase.database().ref(`Condition/Class IV/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english4").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IV/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math4").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IV/Science`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("science4").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IV/Social Studies`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ss4").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IV/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu4").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IV/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat4").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IV/ICT`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ict4").style = "display:none";
  }
});
//Class4


//Class5
firebase.database().ref(`Condition/Class V/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english5").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class V/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math5").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class V/Science`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("science5").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class V/Social Studies`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ss5").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class V/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu5").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class V/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat5").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class V/ICT`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ict5").style = "display:none";
  }
});
//Class5

//Class6
firebase.database().ref(`Condition/Class VI/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/Science`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("science6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/History`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("history6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/Geography`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("geography6").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VI/ICT`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ict6").style = "display:none";
  }
});
//Class6


//Class7
firebase.database().ref(`Condition/Class VII/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/Science`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("science7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/History`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("history7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/Geography`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("geography7").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class VII/ICT`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ict7").style = "display:none";
  }
});
//Class7


//Class Pre-Nine
firebase.database().ref(`Condition/Class Pre-Nine/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Pak Studies`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ps8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Chemistry`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("chemistry8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Physics`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("physics8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Computer`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("computer8").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class Pre-Nine/Biology`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("biology8").style = "display:none";
  }
});
//Class Pre-Nine


//Class nine
firebase.database().ref(`Condition/Class IX/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Pak Studies`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ps9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Chemistry`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("chemistry9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Physics`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("physics9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Computer`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("computer9").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class IX/Biology`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("biology9").style = "display:none";
  }
});
//Class nine



//Class ten
firebase.database().ref(`Condition/Class X/English`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("english10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Math`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("math10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Pak Studies`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("ps10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Chemistry`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("chemistry10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Urdu`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("urdu10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Islamiyat`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("islamiyat10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Physics`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("physics10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Computer`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("computer10").style = "display:none";
  }
});
firebase.database().ref(`Condition/Class X/Biology`).on('value', (data) => {
  var condition = data.val().Value;
  console.log(condition);
  if (condition == false) {
    document.getElementById("biology10").style = "display:none";
  }
});
//Class ten


////////////////////////////////////////////////////////////////////////////////////////////






function getData(e) {
  e.style.color = 'white';
  e.style.backgroundColor = 'green'


  subjectName = e.innerHTML;
  console.log(subjectName);
  sessionStorage.setItem("subjectName", subjectName);//take jab b name chye ho to get name ker k lele hum "name"
  check1 = true;
}



function getClass(e) {

  e.style.color = 'white';
  e.style.backgroundColor = 'purple'
  e.style.borderRadius = '10%'

  className = e.innerHTML;
  e.style.color = 'red';
  console.log(className);
  sessionStorage.setItem("className", className);//take jab b name chye ho to get name ker k lele hum "name"
  check2 = true;
}


function go() {
  while (check1 == false || check2 == false) {
    alert("Please select the appropriate Class and the Subject to proceed further");
    return;
  }


let promise =new Promise(function(resolve,reject){

///////////////////////////////////////////
firebase.database().ref(`AnonymousUser`).once('value', function(data){
  if(data.val()){
    resolve(data.val());
  }
  else{
    reject(`The USER ${user_name} IS GIVING THIS TEST FOR FIRST TIME`);
  }
 
  })

})

promise.then(function(data){
  var quiz = data;
  var keys = Object.keys(quiz);
    for (let i = 0; i < keys.length; i++) {

      var key = keys[i];
      var Name = quiz[key].Name;
      //     console.log("The username from firebase database: ",Name); 

      if (user_name == Name) {
        //  alert("The user has given the test ");
        check3 = true;
      }
      console.log("The username from firebase database: ", Name + i + check3);


    }
    
console.log(check3);

if(check3 == true) {
    alert("The user has given the test ");
}
else if (check3 == false && check1 == true && check2 == true) {
      alert("Welcome");
      location.href = "quiz.html";
}
})
.catch(function(err){
  alert(err);
  alert("Welcome");
  location.href = "quiz.html";
})



}



var database = firebase.database();

