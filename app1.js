
// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAR71UUc6Aa0UKHL0uAodSJCHxJJG_pRXk",
    authDomain: "shaureducationalcomplexschool.firebaseapp.com",
    databaseURL: "https://shaureducationalcomplexschool.firebaseio.com",
    projectId: "shaureducationalcomplexschool",
    storageBucket: "shaureducationalcomplexschool.appspot.com",
    messagingSenderId: "997667524013",
    appId: "1:997667524013:web:4db4e2d3d7a7a51ead6524",
    measurementId: "G-LEQM2LGW26"
  };
      firebase.initializeApp(firebaseConfig);
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
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
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }