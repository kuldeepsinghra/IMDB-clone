var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = '⛅Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = '🌇Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = '🎴Good Evening';

document.querySelector('.greeting-message').innerHTML =
    '<b>' + greet;