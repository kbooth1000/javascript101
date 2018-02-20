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


//  #######  FACTOR A NUMBER  ######
// Write a function factors which is given a number
// and returns an array containing all its factors.

var factors = function(num) {
    var factorsListLower=[1];
    var factorsListUpper=[num];
    var factorsList = [];
    for(i=1; i<=num; i++) {
        if (i*2==num) {
            factorsListLower.push(i);
        }
        if (num % i == 0) {
            if(factorsListLower[i-1] == factorsListUpper[i]) {
                factorsListLower[i] = i;
                console.log('That\'s it!');
                break;
            }
                factorsListLower[i] = i;
                factorsListUpper[i] = num/i;
            console.log('Factors: '+factorsListLower[i] + ', ' + factorsListUpper[i]);
        }
        if( (factorsListLower[i-1] == factorsListUpper[i])  ) {
            
            console.log('That\'s it!');
            break;
        }
        
    }
    factorsListUpperR = factorsListUpper.reverse();
    factorsList = factorsListLower.concat(factorsListUpperR);
    factorsList.pop();
    factorsList.shift();
    factorsListUnique = [];
    for (j = 0; j<=factorsList.length; j++) {
        if(factorsListUnique.indexOf(factorsList[j]) == -1) {
            factorsListUnique[j] = factorsList[j];
        }
    }
    console.log('#  ' + (factorsListUnique.join()));
}

factors(4);


//  #######  CAESAR CIPHER  ######
// Write a function cipher which is given a string, 
// an offset, and returns the Caesar cipher of the string.

var cipher = function(str, offset) {
    str = str.toLowerCase();
    cipheredString='';
    var alphabet = ['a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];
    var ciphered = [];
    for(i=0; i<=str.length-1; i++) {
        if(str[i]==' ') {
            ciphered[i] = ' ';
        } else {
        ciphered[i] = alphabet[(alphabet.indexOf(str[i]) + offset) % 26];
        }
    }
    for(j=0; j<=str.length-1; j++) {
        cipheredString += ciphered[j];
    }
    console.log('Ciphered String: ' + cipheredString);
}

cipher('The code name is Scooter', 1)


//  #######  CAESAR CIPHER 2  ######
// Write a function decipher which is given a string, 
// an offset, and returns the original message.

var decipher = function(str, offset) {
    str = str.toLowerCase();
    cipheredString='';
    var alphabet = ['a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];
    var ciphered = [];
    for(i=0; i<=str.length-1; i++) {
        if(str[i]==' ') {
            ciphered[i] = ' ';
        } else {
            if(  (alphabet.indexOf(str[i]) - offset) < 0 ) {
                ciphered[i] = alphabet[  (26 + (alphabet.indexOf(str[i]) - offset)) ];
            } else {
                ciphered[i] = alphabet[(alphabet.indexOf(str[i]) - offset) % 26];
            }
        }
    }
    for(j=0; j<=str.length-1; j++) {
        cipheredString += ciphered[j];
    }
    console.log('Deciphered String: ' + cipheredString);
}

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13)

//  #######  LEETSPEAK  ######
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

var leetspeak = function(str) {
    str = str.toLowerCase();
    var newStr = [];
    var leetedStr = '';
    var leets = [
        ['a','4'],
        ['e','3'],
        ['g','6'],
        ['i','1'],
        ['o','0'],
        ['s','5'],
        ['t','7']
    ];
    for(i=0; i<str.length; i++) {
        for(j=0;j<leets.length;j++) {
            if(str[i] == leets[j][0]) {
                newStr[i] = leets[j][1];
                break;
            } else {
                newStr[i] = str[i];
            }
        }
    }
    for (k=0;k<newStr.length;k++){
        leetedStr += newStr[k];
    }
    console.log('Leeted message: ' + leetedStr);
};
leetspeak('Greetings');

//  #######  LONG-LONG VOWELS  ######
// Write a function, which is given a string, return the result of extending 
// any long vowels to the length of 5.

var longVowels = function(str) {
    newStr = '';
    for(i=0;i<str.length;i++) {
        newStr += str[i];
        if(str[i] == str[i-1] && str[i] == 'o') {
            newStr += 'ooo';
        }
        if(str[i] == str[i-1] && str[i] == 'e') {
            newStr += 'eee';
        }
        if(str[i] == str[i-1] && str[i] == 'a') {
            newStr += 'aaa';
        }
    }
    console.log(newStr);
}

longVowels('Good afternoon, Speedy.');


//  #######  SUM THE NUMBERS  ######
// Write a function sumNumbers which is given an array of numbers and returns
// the sum of the numbers.

var sumNumbers = function(numbers) {
    var finalNumber = 0;
    for(i=0;i<numbers.length;i++) {
        finalNumber += numbers[i];
    }
    console.log('Sum : ' + finalNumber);
}

sumNumbers([1,2,3,4,5,6]);


//  #######  JUST THE POSITIVES  ######
// Write a function positiveNumbers which is given an array of numbers and 
// returns a new array containing only the positive numbers within the given array.

var positiveNumbers = function(numbers) {
    var sum = [];
    for (i=0;i<numbers.length;i++) {
        if(numbers[i]%2 == 0) {
            sum.push(numbers[i]);
        }
    }
    console.log('Positives: ' + sum);
}

positiveNumbers([2,44,36,74,74,5,8,55,94,7,0,32,4,7])


//  #######  MATRIX ADDITION  ######
// Write a function matrixAdd which is given two two-dimensional arrays, and 
// returns a new two-dimensional array containing their matrix sum.

var matrixAdd = function(arr) {
    var arr1 = arr[0], arr2 = arr[1];
    matrixSum = [];
    
    for(i=0;i<arr1.length;i++) {
        matrixSum.push( [ arr1[i][0] + arr2[i][0], arr1[i][1] + arr2[i][1] ] )
    }
    console.log('Matrix sum: [' + matrixSum[0] +'], [' + matrixSum[1] + ']');
}

matrixAdd( [[[1, 3], [2, 4]], [[5, 2], [1, 0]]] );


//  #######  MATRIX MULTIPLICATION  ######
// Write a function matrixMultiply which is given two two-dimensional arrays - you 
// can assume the matricies are of size 2x2. It will return the result of matrix 
// multiplication between the two given matricies.

var matrixMultiply = function(arr1, arr2) {
    row1cell1 = (arr1[0][0] * arr2[0][0]) + (arr1[0][1] * arr2[1][0]);
    row1cell2 = (arr1[0][0] * arr2[0][1]) + (arr1[0][1] * arr2[1][1]);
    row2cell1 = (arr1[1][0] * arr2[0][0]) + (arr1[1][1] * arr2[1][0]);
    row2cell2 = (arr1[1][0] * arr2[0][1]) + (arr1[1][1] * arr2[1][1]);
    console.log(row1cell1, row1cell2, row2cell1, row2cell2);
}

matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]);


//  #######  ROCK, PAPER, SCISSORS  ######
