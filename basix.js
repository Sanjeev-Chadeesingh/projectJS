//BASIC VARIABLES: DECLARATIONS, TYPES
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

//CODING CHALLENGE
var markWeight, markHeight, johnWeight, johnHeight;
markWeight = 100;
markHeight = 2.03;
johnWeight = 78;
johnHeight = 1.72;
var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
var higherBMI = markBMI > johnBMI;
console.log('John: ' + johnBMI, 'Mark: ' + markBMI);
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + higherBMI);
if(markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher.')
} else {
    console.log('John\'s BMI is higher.');
}

//IF ELSE STATEMENTS
var firstName = 'Sanjeev';
var marriageStatus = 'single';
if (marriageStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

//BOOLEAN LOGIC
var firstName = 'Sanjeev';
var age = 36 ;
if(age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else {
    console.log(firstName + ' is a man.');
}

//TERNARY OPERATOR
var firstName = 'Sanjeev';
var age = 36;
age >=21 ? console.log('Have a beer!') : console.log('Have a juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' ' + drink);

//SWITCH STATEMENT
var job = 'fighter';
switch (job) {
    case 'coder':
    case 'developer':
        console.log(firstName + ' is a coder.');
        break;
    case 'driver':
        console.log(firstName + ' is a driver.');
        break;
    case 'designer':
        console.log(firstName + ' is a designer.');
        break;
    default:
        console.log(firstName + ' is something else entirely.');
}

age = 36;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

//TRUTHY AND FALSY VALUES
var height;
height = 0; 
if (height) {
    console.log('variable is defined');
} else {
    console.log('variable is undefined');
}

//CODING CHALLENGE 2
var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;
console.log(johnAverage, mikeAverage, maryAverage);
if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('John\'s team has the highest average, with ' + johnAverage + ' points.');
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('Mike\'s team has the highest average, with ' + mikeAverage + ' points.');
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary\'s team has the highest average, with ' + maryAverage + ' points.');
} else {
    console.log('There seems to be a draw.');
}