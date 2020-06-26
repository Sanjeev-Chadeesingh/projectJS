console.log('Hiyah There!!');

//below code changes the h1 from whatever to orange
// var h1 = document.querySelector('h1');
// h1.style.color = 'orange';

//below code makes body flash black and blue
// var body = document.querySelector('body');
// var isBlue = false;

// setInterval(function() {
//     if(isBlue) {
//         body.style.background = 'black';
//     } else {
//         body.style.background = 'blue';
//     }
//     isBlue = !isBlue;
// }, 1000);

console.log('------------------------------');
console.log('First DOM Example');
var tagOne = document.getElementById('highlight');
console.log(tagOne);
var tagsOne = document.getElementsByClassName('bolded');
console.log(tagsOne);
var tagsTwo = document.getElementsByTagName('li');
console.log(tagsTwo);
var tagThree = document.querySelector('#highlight');
var tagFour = document.querySelector('.bolded');
console.log(tagThree);
console.log(tagFour);
var banana = document.querySelector('li a.special');
//above is an example of nested selectors: li's with a's with special className
var tagsFive = document.querySelectorAll('.bolded');
console.log(tagsFive);