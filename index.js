function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!'
  } else if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(someValue) {
  return someValue === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(someValue) {
  switch (someValue) {
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
      break
  }
}

// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.
// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.
