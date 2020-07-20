function closeform()
{
  document.getElementById("baradaba").style.display = "none";
  document.getElementById("btn1").style.display = "none";
}

function required()
{
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var Sname = document.getElementById("Sname").value;
var Gname = document.getElementById("Gname").value;
var classS = document.getElementById("classS").value;
var mobile = document.getElementById("mobile").value;
if (email == ""||password=="" ||Sname==""||Gname==""||classS==""||mobile=="")
{
alert("Please input a Value");
}
else 
{
    document.getElementById("baradaba").style.display = "none";   
    alert('Thanks for giving your information.We will contact to you as soon as possible');
     
}
}
// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDE-miGu1Q_wQt91TgJojn7rwO6Lb6q8jg",
  authDomain: "shaureducationalcomplex-123.firebaseapp.com",
  databaseURL: "https://shaureducationalcomplex-123.firebaseio.com",
  projectId: "shaureducationalcomplex-123",
  storageBucket: "shaureducationalcomplex-123.appspot.com",
  messagingSenderId: "4097585772",
  appId: "1:4097585772:web:dad844855596a55fb11e49",
  measurementId: "G-KRBPTCN44E"
};
    firebase.initializeApp(firebaseConfig);
    database=firebase.database();


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var Sname = document.getElementById("Sname").value;
  var Gname = document.getElementById("Gname").value;
  var classS = document.getElementById("classS").value;
  var mobile = document.getElementById("mobile").value;  // Save message
  saveMessage(email, password, Sname, Gname, classS,mobile);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, password, Sname, Gname, classS,mobile){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Email: email,
    Password:password,
    StudentName:Sname,
    GuardianName:Gname,
    Class:classS,
    MobileNo:mobile
  });
}


//this is new

  function sendMesssage()
  {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    dateTime=dateTime.toString();


      var email=document.getElementById("email1").value;
      var name=document.getElementById("name").value;
      var comment=document.getElementById("message").value;
console.log(email+name+comment+dateTime)
      var newMessageKey = database.ref().child('comments').push().key;
      database.ref('comments/'+newMessageKey+'/email').set(email);
      database.ref('comments/'+newMessageKey+'/name').set(name);
      database.ref('comments/'+newMessageKey+'/comment').set(comment);
      database.ref('comments/'+newMessageKey+'/date').set(dateTime);
  }

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();


  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

}


//This is the perfect way to retrieve data leaving all the dull ways of youtubers now
var leadsRef = database.ref('comments');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      // console.log(childData.message)

var name = document.createTextNode('Name: ' + childData.name);
var email = document.createTextNode('Email: ' + childData.email);
var comment = document.createTextNode('Comment : ' + childData.comment);
var date = document.createTextNode('Date: ' + childData.date);




var ult = document.getElementById("scoreList");
var lit = document.createElement("li");
lit.setAttribute('class','uls');
lit.appendChild(name);
lit.appendChild(document.createElement('br'));
lit.appendChild(email);
lit.appendChild(document.createElement('br'));
lit.appendChild(comment);
lit.appendChild(document.createElement('br'));
lit.appendChild(date);
lit.appendChild(document.createElement('br'));
ult.appendChild(lit);



//Hey this is
    });
});
//This is the perfect way to retrieve data leaving all the dull ways of youtubers now




