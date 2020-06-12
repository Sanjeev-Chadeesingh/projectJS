console.log('JONAS INTRODUCTION');
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
console.log('================================================');
console.log('================================================');
console.log('COLT INTRODUCTION');
var x = 10 % 3;
console.log(x);
var name = 'Sanjeev';
console.log(name.length)
console.log('Sanjeev'.length);
//colt coding challenge 1
/*
var firstName = prompt('What\'s your first name?');
var lastName = prompt('What\'s your last name?');
var age = prompt('How old are you?');
console.log(firstName, lastName);
console.log(age);
alert('Hello ' + firstName + ' ' + lastName + '. What\'s it like being ' + age + ' years old?');

//age calculator
var age = prompt('How old are you?');
var calculator = age * 365.25;
alert('You are ' + calculator + ' days old.');
*/
console.log('================================================');
console.log('================================================');
console.log('JONAS FUNCTIONS');

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageSanjeev = calculateAge(1984);
var ageKamal = calculateAge(1948);
var ageAlice = calculateAge(1951);
console.log(ageSanjeev, ageKamal, ageAlice);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1984, 'Sanjeev');
yearsUntilRetirement(1948, 'Kamal');

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an Uber.';
        case 'designer':
            return firstName + ' designs beautiful pools.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('fighter', 'Ellis'));
console.log(whatDoYouDo('teacher', 'Mark'));
console.log(whatDoYouDo('designer', 'Junebug'));
console.log('================================================');
console.log('================================================');
console.log('ARRAYS JONAS');
var names = ['Sanjeev', 'Sanjay', 'Shanti'];
var years = new Array(1984, 1980, 1985);
console.log(names[2]);
console.log(names.length);
//Array Mutation
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
//Array with different data types
var sanjeev = ['Sanjeev', 'Chadeesingh', 1984, 'coder', false];
sanjeev.push('mixed');
sanjeev.unshift('male');
console.log(sanjeev);
console.log(sanjeev.indexOf('happy'));
//Array logic
var isDesigner = sanjeev.indexOf('designer') === -1 ? 'Sanjeev is not a designer.' : 'Sanjeev is a designer.';
console.log(isDesigner);
//Coding Challenge 2
var bills = [124, 48, 268];
 
function tipCalc(bill) {
    var tip;
    if (bill < 50) {
       return tip = bill * .2;
    } else if (bill >= 50 && bill < 200) {
        return tip = bill * .15;
    } else {
        return tip = bill * .1;
    }
};

var test = tipCalc(100);
console.log(test);
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
var totals = [(tipCalc(bills[0])) + bills[0], (tipCalc(bills[1])) + bills[1], (tipCalc(bills[2])) + bills[2]]
console.log('Tips: ' + tips);
console.log('Totals: ' + totals);