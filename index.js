

// let promise = new Promise(function (resolve, reject) {

//     ///////////////////////////////////////////
//     firebase.database().ref(`Notification/`).once('value', function (data) {
//       if (data.val()) {
//         resolve(data.val());
//       }
//       else {
//         reject(`The error has occurred`);
//       }
//     })
  
//   })
  
//   promise.then(function (data) {
//     var AllData = data;
    
//     document.getElementById("notice").innerHTML+=AllData.Notification;
//     document.getElementById("head").innerHTML=AllData.Heading;
//     console.log(AllData.Name)
    

//   })
//     .catch(function (err) {
//       console.log(err);
//     })
  // Checking for the users to resubmit the quiz  
  


  let storage=firebase.storage()
  let storageRef=storage.ref()


  var i=0;


  storageRef.child('').listAll().then((result)=>{
result.items.forEach((imageRef)=>{
displayImage(i,imageRef)
i++;
})

  })

  let displayImage=(row,images)=>{
  images.getDownloadURL().then((url)=>{
console.log(row);
  document.getElementsByClassName("image")[row].setAttribute("src",url);


  })
  }