//all numbers that are multiples of 2, 4 and 6 from 100 to 10000

// var num = 100;

// while(num < 1000) {
//     if(num % 2 === 0 && num % 4 === 0 && num % 6 === 0) {
//         console.log(num);
//     }
//     num++;
// }

//factorialize 
// function factorialize(num) {
//     var result = 1;
//     for(var i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// };

// var test = factorialize(5);
// console.log(test);
// function doMath() {
//     var x = 40;
//     console.log(x);
// }

// doMath();
// console.log(x);

// var colors = ['red', 'orange', 'yellow'];
// colors[3] = 'green';
//console.log(colors);

// var dogs = ['Rusty', 'Wyatt', 'Ollie'];
// console.log(dogs.length);
var fruits = ['oranges', 'lemons', 'limes', 'pears', 'apples', 'peaches'];

// for(var i = 0; i < fruits.length; i++) {
//     console.log('Here, have some ' + fruits[i]);
// }

// var count = 0;
// while(count < fruits.length) {
//     console.log('Here, have some ' + fruits[count]);
//     count++;
// }

// fruits.forEach(function(fruit) {
//     console.log('Here, have some ' + fruit);
// });
// console.log(fruits);
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var colors = ['red', 'orange', 'yellow', 'green'];

// numbers.forEach(function(el, i, arr) {
//     console.log(el, i, arr);
// })

console.log('hiyah there!!');
var movies = [
    desperado = {
        title: '"Desperado"',
        rating: '4 stars',
        hasWatched: true
    },
    insideOut = {
        title: '"Inside Out"',
        rating: '5 stars',
        hasWatched: true
    },
    darkKnight = {
        title: '"The Dark Knight"',
        rating: '4 stars',
        hasWatched: true
    },
    crazyRichAsians = {
        title: '"Crazy Rich Asians"',
        rating: '3 stars',
        hasWatched: false
    }
]

for(var i = 0; i < movies.length; i++) {
    if(movies[i].hasWatched === true) {
        var seen = 'You have watched ';
        movies[i].watch = seen;
    } else if(movies[i].hasWatched === false) {
        var unseen = 'You have not seen ';
        movies[i].watch = unseen;
    }
    console.log(movies[i].watch + '' + movies[i].title + ' - ' + movies[i].rating);
}
