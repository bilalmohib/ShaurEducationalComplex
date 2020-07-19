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
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// This is the retrieve data
var ref=database.ref('messages');
ref.on('value',gotData,errData);

function gotData(data){
console.log(data.val());
var messages=data.val();
var keys =Object.keys(messages);
console.log(keys);
for (var i=0;i<keys.length;i++)
{
  var k=keys[i];
  var initials = messages[k].initials;
  var message = messages[k].message;
  //console.log(initials,message);
 // var li = document.createElement(initials,message);
  //li.parentElement('scoreList');

  var list = document.getElementById('scoreList');

  var scoreList = document.getElementById('scoreList').value;
  var entry = document.createElement('li',initials+": "+message+" ");
  entry.appendChild(document.createTextNode(scoreList));
  list.appendChild(entry);
}
}

function errData(err)
{
console.log('Error!');
console.log(err);
}

//This is to retrieve the data


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

