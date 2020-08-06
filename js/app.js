'use strict';

function whatIsYourName(){
  var userName =prompt('Hello, what is your name?');
  console.log('Visitor name is ' + userName);
  alert('Welcome ' + userName + ', to my about me page');
}

whatIsYourName()

//question1//
function goodMorning(){
  var question1= prompt('Are you having a good morning?');
  if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y'){ ('that is great, you will have a great day!');
  }
  else if (question1.toLowerCase() === 'no' ||question1.toLowerCase() === 'n'){ ('That is ok because you are about to have a great day');
  }
  else alert('I dont know what that was, but hang in there and try y or n or yes or no');
}

goodMorning()

//question 2//
function practiceCoding(){
  var question2= prompt('Are you practicing your coding?');
  if(question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y'){ ('that is great, you are gonna be a pro someday!');
  }
  else if (question2.toLowerCase() === 'no' ||question2.toLowerCase() === 'n'){  ('That is ok keep practicing and do not forget to ask for help');
  }
  else alert('I dont know what that was, but hang in there and try y or n or yes or no');
}

practiceCoding()

//question 3//
var question3= prompt('Have you started creating a support network?');
if(question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y'){answer3 = 'that is great, you are gonna make a ton of friends!';}
else if (question3.toLowerCase() === 'no' ||question3.toLowerCase() === 'n'){answer1 = 'That is ok, do not be afraid to reach out to people in your industry';}
else alert('I dont know what that was, but hang in there and try y or n or yes or no');

//question 4//
var question4= prompt('Are you keeping a positive mental attitude?');
if(question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y'){answer1 = 'that is great, you are gonna make a ton of friends!';}
else if (question4.toLowerCase() === 'no' ||question4.toLowerCase() === 'n'){answer1 = 'That is ok, do not be afraid to reach out to people in your industry';}
else alert('I dont know what that was, but hang in there and try y or n or yes or no');
