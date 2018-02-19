var hello = function(name = 'Hello World') {
    console.log(name);
}

hello('Kyle');
hello();



//   MADLIB FUNCTION
var madlib = function(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log(madlib('Fred', 'movie interpretation'));


//   RESTAURANT FUNCTIONS
var tipAmount = function(bill, service) {
    var tip;
    if (service == 'good') {
        tip = bill * .2;
    }
    if (service == 'fair') {
        tip = bill * .15;
    }
    if (service == 'poor') {
        tip = bill * .1;
    }
    return tip;
}

var totalAmount = function(billAmount, serviceLevel) {
    return billAmount + tipAmount(billAmount, serviceLevel);
}

var splitAmount = function(billAmount, serviceLevel, numberPeople) {
    theTotal = totalAmount(billAmount, serviceLevel);
    return theTotal / numberPeople;
}

var outputArea = document.getElementById('output');
console.log('The tip amount is: $' + tipAmount(25, 'fair') + '.');
outputArea.innerHTML = tipAmount(25, 'fair');


console.log('The total amount is: $' + totalAmount(100, 'good') + '.');


console.log('The total amount  per person is: $' + splitAmount(100, 'fair', 4) + '.');



// #######  PRINT NUMBERS  #########   

// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line.

var printNumbers = function(firstNum, lastNum) {
    numList = [];
    for (i = firstNum; i <= lastNum; i++) {
        console.log(i);
    }
}
printNumbers(17, 24);


//  #######  PRINT SQUARE ######
// Write a function printSquare which is given a size 
// and prints a square of that size using asterisks.

var makeSquare = function(squareSize) {
    var square = [];
    var squareRow = [];
    var finalSquare = '';
    for (i = 0; i < squareSize; i++) { // row
        squareRow[i] = [];
        for (j = 0; j < squareSize; j++) { // chars in row
            squareRow[i][j] = '*';
        }

        square[i] = squareRow[i].join('') + '\n';
        finalSquare += square[i];
    }
    console.log(finalSquare);
}
makeSquare(6);


//  #######  PRINT BOX  ######
// Write a function printBox which is given a size 
// and prints a box of that size using asterisks.
var makeBox = function(boxSize) {
    var box = [];
    var boxRow = [];
    var finalBox = '';
    for (i = 0; i < boxSize; i++) { // row
        boxRow[i] = [];
        for (j = 0; j < boxSize; j++) { // chars in row
            if (i == 0 || i == boxSize - 1) {
                boxRow[i][j] = '*';
            } else {
                if (j == 0 || j == boxSize - 1) {
                    boxRow[i][j] = '*';
                } else {
                    boxRow[i][j] = ' ';
                }
            }
        }

        box[i] = boxRow[i].join('') + '\n';
        finalBox += box[i];
    }
    console.log(finalBox);
}
makeBox(6);


//  #######  PRINT A BANNER  ######
// Write a function printBanner which is given a size 
// and prints a box of that size using asterisks.
var makeBanner = function(message) {
    message = '  ' + message + '  ';
    bannerSize = message.length;
    var banner = [];
    var bannerRow = [];
    var finalBanner = '';
    for (i = 0; i < 5; i++) { // row
        bannerRow[i] = [];

        for (j = 0; j < bannerSize; j++) { // chars in row
            if (i == 0 || i == 4) {
                bannerRow[i][j] = '*';

            } else {
                if ((i >= 1 || i <= 3) && (j == 0 || j == bannerSize - 1)) {
                    bannerRow[i][j] = '*';
                } else if (  ((i == 1 || i == 3) && (j >= 1)) || ((i == 1 || i == 3) && (j <= bannerSize - 2))  ) {
                    bannerRow[i][j] = ' ';

                } else if ( (i == 2) && (1 < j < bannerSize-2)) {
                    bannerRow[i][j] = message[j];
                }
            }

        }
        banner[i] = bannerRow[i].join('') + '\n';
        finalBanner += banner[i];
    }
    console.log(finalBanner);
}

makeBanner('THIS IS A BANNER');