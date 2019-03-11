// Write your code in this file!
function scuberGreetingForFeet(distance) {
  switch (true) {
    case distance <= 400:
      return 'This one is on me!';
      break;
    case distance > 2500:
      return 'No can do.';
      break;
    case distance > 2000:
      return 'I will gladly take your thirty bucks.';
      break;
  }
};

function ternaryCheckCity(city) {
  let result;
  result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result;
};

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
      break;
  }
}
