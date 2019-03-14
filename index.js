function scuberGreetingForFeet(someValue) {

  if (someValue <= 400) {
    return 'This one is on me!'
  } else if (1999 < someValue && someValue < 2500) {
      return 'I will gladly take your thirty bucks.'
  } else {
      return 'No can do.'
  }
}

function ternaryCheckCity(someCity) {
   return someCity === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(theTip) {
  switch (theTip) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}
