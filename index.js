// index.js contains logic for the course of the game and depends on importing word.js

// import word.js
var word = require('./word.js');
// import inquirer for user interface
var inquirer = require('inquirer');

// variables defined globally for use in multiple functions
// var isItDone is true when all correct letters guessed
var isItDone = false;
// array animals for word choices
var animals = ['giraffe', 'aardvark', 'cat', 'dog', 'tiger', 'wolf', 'mouse', 'deer', 'squirrel'];
//  var pickedAnimal is the index of the animals array member used in a round
var pickedAnimal;
// var inputTest is the element of the animals array chosen for a round
var inputTest;
// var count is the number for times a player may guess
var count;
// counters for wins/losses for a the series of games played before the game is exited
var winCounter = 0;
var lossCounter = 0;

// function start sets initial conditions and asks user whether they wish to play or not
var start = function() {
    // initial conditions
    count = 0;
    isItDone = false;
    pickedAnimal = animals[Math.floor(Math.random() * animals.length)];
    // create new object using element from animals array using imported Word contructor
    inputTest = new word.Word(pickedAnimal);
    // 
    inputTest.buildIt();
    // ask user if they wish to play
    inquirer.prompt({
        name: 'playOrNot',
        type: 'rawlist',
        message: 'Animcal Guessing Game. Would you like to [PLAY] or [QUIT] the game?',
        choices: ['PLAY', 'QUIT']
    }).then(function(answer) {
        if (answer.playOrNot.toUpperCase()=='PLAY') {
            guessing();
        } else {
            console.log('Goodbye!');
        }
    })
}

// function guessing asks player to input guesses
var guessing = function() {
    // build underscores for game round using * instead of letter
    if (count === 0) {
        inputTest.checkIt('*');
    }
    // player can make up to 10 guesses before round is over
    if (count < 10) {
        inquirer.prompt({
            name: 'Guess',
            type: 'input',
            message: 'What is your guess?',
        }).then(function(answer) {
                // when isItDone is true, all letters have been guessed correctly
                isItDone = inputTest.checkIt(answer.Guess);
                if (isItDone) {
                    // invrease number of wins and display
                    winCounter++;
                    console.log('Wins: ' + winCounter);
                    console.log('Losses: ' + lossCounter);
                    start();
                } else {
                    count++;
                    guessing();
                }
                });
            // if player exhausts number of guesses, round is over and players loses
            } else {
                console.log('You Lose!');
                // increase number of losses and display
                lossCounter++;
                console.log('Wins: ' + winCounter);
                console.log('Losses: ' + lossCounter);
                start();
            }
        }
// call start to begin game series
start();