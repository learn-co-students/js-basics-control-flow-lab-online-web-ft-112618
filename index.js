// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (someValue > 2500 ) {
    result = 'No can do.'
  } else if (someValue > 2000 ) {
    result = 'I will gladly take your thirty bucks.'
  }

  return result;
}

function ternaryCheckCity(someCity){
  someCity === 'NYC' ? ( result = 'Ok, sounds good.' ) : ( result = 'No go.')

  return result;
}

function switchOnCharmFromTip(someTip){

  switch(someTip) {
    case 'generous':
      result = "Thank you so much."
      break;
    case 'not as generous':
      result = "Thank you."
      break;
    default:
      result = 'Bye.'
    break;
  }

  return result;
}
