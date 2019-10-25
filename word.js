// word.js contains a constructor, Word that depends on the Letter constructor in letter.js
// that is used to create an object representing the current word.

// import letter.js
var importLetter = require('./letter.js');

// constructor Word creates objects for animal chosen
function Word(word)  {
    //  array for objects created for each letter in animal name created 
    this.lettersUnder = [];
    // array to keep track of letters guessed
    this.lettersGuessed = [];
    // split word into array of letters
    this.word = word.split("");
    // array for displaying the current state of known letters and underscores
    this.output = [];
    // arrays of letters in word used to compare with array output to determine if all letters guessed
    this.complete = [];
    // 
    this.buildIt = function() {
        for (var i = 0; i < this.word.length; i++) {
            // create object using Letter constructor in letter.js
            this.lettersUnder.push(new importLetter.Letter(this.word[i]));
            // put together array of underscores and letters for comparison and display purposes
            this.complete.push(this.lettersUnder[i].letter)
        }
    //
    }
    this.checkIt = function(couldBe) {
        // array for displaying the current state of known letters and underscores 
        this.output = [];
        // add to array of guessed letters
        this.lettersGuessed.push(couldBe);
        // check if each letter is correct and if so display it
        for (var k = 0; k < this.lettersUnder.length; k++) {
            this.lettersUnder[k].verifyIt(couldBe);
            this.output.push(this.lettersUnder[k].displayIt());
        }
        // test if output array === complete array to determine if round is won
        if (this.output.join('+') === this.complete.join('+')) {
            console.log('You Win!');
            return true;
        }
        // display letters and underscores
        console.log(this.output);
    }
}
// export word.js as object
module.exports = {
    Word: Word
};
