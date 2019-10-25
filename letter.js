// letter.js**: Contains a constructor, Letter, which either displays an underlying
// character or a blank placeholder depending on whether or not the user has guessed
// the letter.

// constructor Letter checks if letter correctly guessed and display current state of
// letters correctly guessed and underscores unguessed letters
function Letter(letter) {
    this.letter = letter.toLowerCase();
    this.guessed = false;
    // verifys if the letter has been correctly guessed and if so returns this.guessed true 
    this.verifyIt = function (guess) {
        if (this.letter === guess.toLowerCase()) {
            this.guessed = true;
            return this.guessed;
        } else {
            return false;
        }
    }

    // displays letter if correctly guessed or underscore
    this.displayIt = function() {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    }
}

// export letter.js as object
module.exports = {
    Letter: Letter
};

