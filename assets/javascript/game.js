$(document).ready(function () {
    //List of variables used
    var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerPick = newLetter();
    var numWins = 0;
    var numLosses = 0;
    var numGuessesLeft = 9;
    var winstreak = -1;
    var justLost = false;
    var winText = $("#winId");
    var lossText = $('#loseID');
    var guessesLeftText = $('#numGuessLeftId');
    var guessedText = $('#userGuessesId');
    var winStreakText = $('#winstreakId');


    //"listens" for when a key is pressed within the web page
    $(document).keyup(function () {
        //grabs key
        var userPick = event.key;

        console.log(userPick); //for testing purposes



        //Win condition
        if (userPick === letterList[computerPick]) {
            numWins++;
            winstreak++;
            justLost = false;
            winText.text('Wins: ' + numWins);
            
            
            //console.log('winstreak: ' + winstreak + '\n' + 'justLost: ' + justLost + '\n' + 'numWins' + numWins);
            //winstreak handling
            if (justLost === false && numWins > 1 && winstreak > 0) {
                winStreakText.text("Wow you're on a " + winstreak + " winstreak!");
            }
            computerPick = newLetter();
            //loss handling and resetting variables
        } else {
            numGuessesLeft--;
            guessedText.append(' ' + userPick);
            if (numGuessesLeft === 0) {
                clear();
                numLosses++;
            }
            guessesLeftText.text('Guesses Left: ' + numGuessesLeft);
            lossText.text('Losses: ' + numLosses);


        }

    });

    //resets variables and picks a new letter to guess
    function clear() {
        numGuessesLeft = 9;
        winstreak = -1 //this makes it so user needs to win twice consecutively to get back on a winstreak
        justLost = true;
        guessedText.text('Your Guesses so far: ');
        winStreakText.text(' ');
        computerPick = newLetter();
        return
    }

    //picks a new letter
    function newLetter() {
        var newLetter = Math.floor(Math.random() * letterList.length);

        console.log('This is the new letter: ' + letterList[newLetter]); //for testing purposes.
        return newLetter;
    }


});