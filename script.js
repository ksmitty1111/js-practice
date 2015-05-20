var userNumber = prompt("Input a number");
var computerNumber = Math.floor((Math.random() *50) +1); 
  
if (userNumber > computerNumber) {
		alert ("Your number was too high") ;
}
else  {
	alert ("Your number was too low");
}

