

let promise = new Promise(function (resolve, reject) {

    ///////////////////////////////////////////
    firebase.database().ref(`Notification/`).once('value', function (data) {
      if (data.val()) {
        resolve(data.val());
      }
      else {
        reject(`The error has occurred`);
      }
    })
  
  })
  
  promise.then(function (data) {
    var AllData = data;
    
    document.getElementById("notice").innerHTML+=AllData.Notification;
    document.getElementById("head").innerHTML=AllData.Heading;
    console.log(AllData.Name)
    

  })
    .catch(function (err) {
      console.log(err);
    })
  // Checking for the users to resubmit the quiz  
  