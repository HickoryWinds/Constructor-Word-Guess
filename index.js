// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var word = require('./word.js');

var inquirer = require('inquirer');

var inputTest = new word.Word("giraffe");
// console.log(inputTest.word);

var isItDone = false;

inputTest.printIt();

// inputTest.checkIt('f');
// inputTest.checkIt('g');
// inputTest.checkIt('r');
// inputTest.checkIt('t');
// inputTest.checkIt('f');

var start = function() {
    inputTest.buildIt();
    isItDone = false;
    console.log('start');
    console.log(isItDone);
    inquirer.prompt({
        name: 'playOrNot',
        type: 'rawlist',
        message: 'Would you like to  [PLAY] or [QUIT] the game?',
        choices: ['PLAY', 'QUIT']
    }).then(function(answer) {
        if (answer.playOrNot.toUpperCase()=='PLAY') {
            guessing();
        } else {
            console.log('Goodbye!');
        }
    })
}

var count = 1;

var guessing = function() {
    if (count < 15) {
        inquirer.prompt({
            name: 'Guess',
            type: 'input',
            message: 'What is your guess?',
            // choices: ['START', 'GUESS']
        }).then(function(answer) {
            // if (answer.startOrGuess.toUpperCase()=='GUESS') {
                inputTest.checkIt(answer.Guess);
                isItDone = inputTest.checkIt(answer.Guess);
                console.log('isItDone');
                console.log(isItDone);
                if (isItDone) {
                    console.log('resetting?');
                    count = 0 ;
                    isItDone = false;
                    inputTest = new word.Word("aardvark");
                    start();
                } else {
                    isItDone = false;
                    guessing();
                    count++;
                }
                // } else {
                    // console.log(bidAuction());
                    // }
                })
            } else {
                console.log('You Lose!');
                // console.log(input);
                isItDone = false;
                count = 0;
                inputTest = new word.Word("aardvark");
                start();
            }
        }
// guessing();
// console.log('test');
// console.log('g+_+_+_+_+_+_' === 'g+i+r+a+f+f+e');
start();