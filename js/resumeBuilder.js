/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append(["Josué"]); /* add a string Josué ao id main */
$("#main").append( '<br />' );

var name = 'Josué';
var awesomeThoughts = 'I am ' + name  + ' and I am AWESOME!';
$("#main").append(awesomeThoughts);
$("#main").append( '<br />' );

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts)
$("#main").append( '<br />' );





$("#main").append( '<br />' );
$("#main").append(awesomeThoughts);
$("#main").append( '<br />' );

var email = 'josuerodrigues@gmail.com';
$(main).append(email)
console.log(email);
$("#main").append( '<br />' );


var newEmail = email.replace("gmail", "yahoo");
$(main).append(newEmail)
console.log(newEmail);
$("#main").append( '<br />' );

