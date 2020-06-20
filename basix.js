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

console.log('================================================');
console.log('================================================');
console.log('CONTROL FLOW COLT');
var x = 'Hiyah!';
console.log(!!x);
console.log('Conditionals:');

var age = 36;

if (age < 0) {
    console.log('Error!');
} else if (age == 21) {
    console.log('Happy birthday!! First drink is free!');
} else if (age % 2 === 1) {
    console.log('Your age is odd!');
} else if (age % Math.sqrt(age) === 0) {
    console.log('Your age is a perfect square.');
} 
console.log('GUESSING GAME');
var secretNumber = 5;
//var guess = Number(prompt('Guess a number 1-10'));
// alert('You guessed ' + guess);
// if (guess === secretNumber) {
//     alert('Good guess!');
// } else {
//     alert('Incorrect! Try again!');
// }
//guess === secretNumber ? alert('Good guess!') : alert('Incorrect!');
console.log('WHILE LOOPS');
console.log('================================================');
// var count = 1;

// while(count <= 10) {
//     console.log('Counter is at ' + count);
//     count++;
// }

// var str = 'hello';
// var count = 0;
// while(count < str.length) {
//     console.log(str[count]);
//     count++;
// }
var countOne = -10;
while(countOne <= 19) {
    console.log('Count: ' + countOne);
    countOne++;
}

var countTwo = 10;
while(countTwo <= 40) {
    if(countTwo % 2 === 0) {
        console.log('Count is ' + countTwo);
    }
    countTwo++;
}

var countThree = 300;
while(countThree <= 333) {
    if(countThree % 2 === 1) {
        console.log('Count is: ' + countThree);
    }
    countThree++;
}

var countFour = 5;
while(countFour <= 50) {
    if(countFour % 3 === 0 && countFour % 5 === 0) {
        console.log('Count is: ' + countFour);
    }
    countFour++;
}
console.log('Annoyomatic');
// var query = prompt('Are we there yet?');
// while(query !== 'yes' && query !== 'yeah') {
//     var query = prompt('Are we there yet?');
// }
// alert('Yay! We are here!');
// while(query.indexOf('yes') === -1) {
//     var query = prompt('Are we there yet?');
// }
// alert('We made it!');
console.log('For loops');
console.log('================================================');
for(var i = 0; i < 10; i++) {
    console.log('I am number ' + i);
}

for(var i = -10; i < 20; i++) {
    console.log(i);
}

for(var i = 10; i < 41; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

for(var i = 300; i < 334; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

for(var i = 5; i < 51; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

console.log('================================================');
console.log('================================================');
console.log('FUNCTIONS COLT');
function doSomething() {
    console.log('Hiyah There!');
};
doSomething();
console.log('Function declarations with args');
function sayHello(name) {
    console.log('Hello there, ' + name);
};
sayHello('Sanjeev');

function sayHelloAlot(name1, name2, name3) {
    console.log('Hello ' + name1);
    console.log('Hello ' + name2);
    console.log('Hello ' + name3);
};
sayHelloAlot('Sanjeev', 'Lloyd', 'Brian');
console.log('Return keyword and functions');

function pewPew(x) {
    return x * x;
}
console.log(pewPew(7));
console.log('Simple function declaration with a returned value');
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = 'paris';
var properCity = capitalize(city);
console.log(properCity);

console.log('Colt\'s Functions Exercise');

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
var test = isEven(7);
console.log(test);
console.log('================================================');

// function factorial(num2) {
//     var result = 1;
//     for(var i = 1; i <= num2; i++) {
//        result *= i;
//     }
//     return result;
// };
// console.log(factorial(3));
// var test2 = factorial(5);
// console.log(test2);
console.log('Kebab to Snake');
var exOne = 'hello_world';

function kebabToSnake(str) {
    var result = str.replace(/-/g, '_');
    return result;
}

console.log(kebabToSnake('project-js'));

console.log(kebabToSnake('my-mobile-portfolio-is-very-cool'));
console.log('================================================');
console.log('================================================');
console.log('SCOPE COLT');
function sing() {
    console.log('Twinkle twinkle...');
    console.log('How I wonder');
}
//setInterval(sing, 1000);
//clearInterval(2);
// console.log('anonymous function below');
// setInterval(function() {
//     console.log('I am an anonymous function!!');
//     console.log('This is awesome!!!');
// }, 2000);

console.log('================================================');
console.log('================================================');
console.log('ARRAYS COLT');
var friends = ['Charlie', 'Liz', 'David', 'Mattias'];
friends[4] = 'Amelie';
console.log(friends);

console.log('Colt Arrays Problem Set');
var colors = ['red', 'orange', 'yellow'];
colors[3] = 'green';
console.log(colors);
colors.push('purple');
console.log(colors);
colors.pop();
console.log(colors);
var nums = [34, 54, 22];
nums.unshift('Hello');
console.log(nums);
nums.shift('Hello');
console.log(nums);
var fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
var citrus = fruits.slice(1, 3);
console.log(citrus);
var nums = [50, 74, 66, 'hello', 'goodbye'];
var newNums = nums.slice();
console.log(newNums);
var strArray = nums.slice(3, 5);
console.log(strArray);
var nums = [5, 7, 9, 10, 12];
console.log(nums[nums.length]);
console.log('ARRAY ITERATION');
var colors = ['red', 'orange', 'yellow', 'green'];
for(var i = 0; i < colors.length; i++) {
    // alert(colors[i]);
    console.log(colors[i]);
}
console.log('FOREACH');
var colors = ['red', 'orange', 'yellow', 'green'];
colors.forEach(function(color) {
    console.log(color);
});

colors.forEach(function() {
    console.log('inside the for each');
});

function printColor(color) {
    console.log('*******************');
    console.log(color);
    console.log('*******************');
};

colors.forEach(printColor);
printColor(colors[0]);

console.log('WHILE ITERATION');
var count = 0;
while(count < colors.length) {
    console.log(colors[count]);
    count++;
}