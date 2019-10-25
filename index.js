// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var word = require('./word.js');

var inquirer = require('inquirer')

var inputTest = new word.Word("giraffe");
// console.log(inputTest.word);
inputTest.buildIt();
inputTest.printIt();
// inputTest.checkIt('f');
// inputTest.checkIt('g');
// inputTest.checkIt('r');
// inputTest.checkIt('t');
// inputTest.checkIt('f');

var start = function() {
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
    if (count < 10) {
        inquirer.prompt({
            name: 'Guess',
            type: 'input',
            message: 'What is your guess?',
            // choices: ['START', 'GUESS']
        }).then(function(answer) {
            // if (answer.startOrGuess.toUpperCase()=='GUESS') {
                inputTest.checkIt(answer.Guess);
                count++;
                guessing();
                // } else {
                    // console.log(bidAuction());
                    // }
                })
            }
            
        }
// guessing();
start();