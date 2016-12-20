var disasterVictims = prompt("how many disaster victims would you like to enter?");
//Victim arrays
var nameVictim = [];
var phoneNumberVictim = [];
var streetVictim = [];

for(var i = 0; i < disasterVictims; i++){
  var nameResponse = prompt("what is the victim's name?");
  nameVictim.push(nameResponse);
  var phoneNumberResponse = prompt("what is the victim's phone number?");
  phoneNumberVictim.push(phoneNumberResponse);
  var streetResponse = prompt("what is the victim's street?");
  streetVictim.push(streetResponse);
}

//Volunteer arrays
var volunteers = prompt("how many volunteers are able to help?")

var nameVolun = [];
var phoneNumberVolun = [];
var streetVolun = [];

for(var x = 0; x<volunteers.length; x++){
  var volunNameResponse = prompt("what is the volunteer's name?");
  nameVolun.push(volunNameResponse);
  var phoneNumberResponseVolum = prompt("what is the volunteer's phone number?");
  phoneNumberVolun.push(phoneNumberVolun);
  var streetResponseVolun = prompt("what is the volunteer's street?");
  streetVolun.push(streetResponseVolun); 
}
