// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor.
// This is used to create an object representing the current word the user is attempting
// to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the
// function on each letter object (the first function defined in `Letter.js`) that
// displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function
// on each letter object (the second function defined in `Letter.js`)

var importLetter = require('./letter.js');

// console.log(letter);

// var test = new letter.Letter("L");
// test.verifyIt('l');
// test.displayIt();
// console.log();

function Word(word)  {
    this.lettersUnder = [];
    this.lettersGuessed = [];
    this.word = word.split("");
    this.output = [];
    this.complete = [];

    this.buildIt = function() {
        for (var i = 0; i < this.word.length; i++) {
            // console.log(this.word[i]);
            this.lettersUnder.push(new importLetter.Letter(this.word[i]));
            // console.log(this.lettersUnder);
            console.log('word-buildIt-1');
            console.log(this.lettersUnder[i].letter);
            this.complete.push(this.lettersUnder[i].letter)
            console.log('word-buildIt-2');
            console.log(this.complete);
        }
    }
    this.printIt = function() {
        for (var j = 0; j < this.lettersUnder.length; j++) {
            // this.lettersGuessed.join(',');
            console.log('word-printIt')
            console.log(this.lettersUnder[j].letter);
            // console.log(this.lettersUnder[j].letter.importLetter.verifyIt(couldBe));
            //  var lettersGuessed = this.lettersUnder[j].letter.join(',');
        }
        console.log('word-printIt')
    }
    this.checkIt = function(couldBe) {
        this.output = [];
        this.lettersGuessed.push(couldBe);
        for (var k = 0; k < this.lettersUnder.length; k++) {
            // console.log(couldBe);
            console.log('word-checkIt-1');
            console.log(this.lettersGuessed);
            // console.log(this.lettersUnder[k]);
            console.log('word-checkIt-2')
            console.log(this.lettersUnder[k].letter);
            console.log('word-checkIt-3')
            console.log(this.lettersUnder[k].verifyIt(couldBe));
            this.lettersUnder[k].displayIt();
            this.output.push(this.lettersUnder[k].displayIt());
        }
        console.log('complete');
        console.log(this.complete);
        console.log(this.output.join('+'));
        console.log(this.complete.join('+'));

        if (this.output.join('+') === this.complete.join('+')) {
            console.log('You Win!');
            return true;
        }
        console.log('output');
        console.log(this.output);
    }
}

module.exports = {
    Word: Word
};
