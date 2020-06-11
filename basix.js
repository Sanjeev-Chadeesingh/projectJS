console.log('6/11, 10:00AM. Starting with the Jonas beginning.');

console.log('Hiyah There!');

var firstName = 'Sanjeev';

var lastName = 'Chadeesingh';

var age  = 36;

var fullAge = true;

var job = 'coder';

//VARIABLE MUTATION AND TYPE COERCION
var firstName = 'Sanjeev';

var age = 36;

var job, isMarried;

job = 'coder';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + ' ' + isMarried);

//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + ' ' + isMarried);

//var lastName = prompt('What is his last name?');
console.log(firstName + lastName);
//alert(firstName + ' ' + lastName);

//BASIC OPERATORS
    //math
var now, ageSanjeev, ageShanti;
now = 2020;
ageSanjeev = 36;
ageShanti = 34;
var yearSanjeev = now - ageSanjeev;
console.log(ageSanjeev);
console.log(ageSanjeev * 2);
    //logic
var sanjeevOlder = ageSanjeev > ageShanti;
console.log(sanjeevOlder);
    //typeof
console.log(typeof sanjeevOlder);
console.log(typeof ageSanjeev)

//OPERATOR PRECEDENCE
var now = 2020;
var yearSanjeev = 1984;
var fullAge = 21;
var isFullAge = now - yearSanjeev >= fullAge;
console.log(isFullAge); 

var ageSanjeev = now - yearSanjeev;
var ageShanti = 34;
var average = (ageSanjeev + ageShanti) / 2;
console.log(average);

var x = 2;
x = x * 2;
console.log(x);
x *= 2;
console.log(x);
var y = 3;
y = y + 3;
y += 3;