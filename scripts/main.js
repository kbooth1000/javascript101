var hello = function(name='Hello World') {
    console.log(name);
}

hello('Kyle');
hello();




var madlib = function(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log( madlib('Fred','movie interpretation') );

var tipAmount = function(bill, service) {
    var tip;
    if(service == 'good') {
        tip = bill * .2;
    }
    if(service == 'fair') {
        tip = bill * .15;
    }
    if(service == 'poor') {
        tip = bill * .1;
    }
    return tip;
}

var totalAmount = function(billAmount,serviceLevel) {
    return billAmount + tipAmount(billAmount, serviceLevel);
}

var splitAmount = function(billAmount, serviceLevel, numberPeople){
    theTotal = totalAmount(billAmount, serviceLevel);
    return theTotal / numberPeople ;
}

console.log(tipAmount(25, 'fair'));


console.log('The total amount is: ' + totalAmount(100, 'good') + '.' );


console.log('The total amount  per person is: ' + splitAmount(100, 'fair', 4 ) + '.' );
