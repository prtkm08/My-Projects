// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSdPDkDL7TAMromDU6Gn6HT06pmiSk_So",
    authDomain: "contact-form-3c388.firebaseapp.com",
    databaseURL: "https://contact-form-3c388.firebaseio.com",
    projectId: "contact-form-3c388",
    storageBucket: "contact-form-3c388.appspot.com",
    messagingSenderId: "607832873181"
};
firebase.initializeApp(config);

// Refrence Messages collection
var messagesRef = firebase.database().ref('messages');
// Listen for submit //
document.getElementById('contactform').addEventListener('submit',submitform);

// Submit form
function submitform(e){
  e.preventDefault();
  
  //get Values

  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save Message
  saveMessage(name, company, email, phone, message);

 // Show Alert
document.querySelector('.alert').style.display = 'block';

// Hide Alert after 3 sec
setTimeout(function(){
 document.querySelector('.alert').style.display = 'none';
},3000);
// Reset form
document.getElementById('contactform').reset();

}

// Function to get form value

function getInputVal(id){
  return document.getElementById(id).value;
}

// save messages to firebase

function saveMessage(name,company,email,phone,message){;
var newMessageRef = messagesRef.push();
newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
});
}