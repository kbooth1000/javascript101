
// Two methods using recursion to flatten an array

// ### 1

var steamRoller = function(arr) {
    var newArr = [];
    var f = function(arr){
 //   base case
        if(arr[0] === undefined) {  return newArr; }

        if (!Array.isArray(arr[0])) {
            var y = arr.shift();
            newArr.push(y);
            f(arr);
        } else {
            var x = arr.shift();
            for(var i=x.length-1;i>=0;i--) { // to ensure entire array item x 
                                             // gets added (in case item is an
                                             // array with a number as first element)
                arr.unshift(x[i]);
            }
            f(arr);
        }
    }
    f(arr);
    return newArr;
    }

console.log('1 >',steamRoller([  1, [2], [3, [[4]] ], 5, [6,[[[7]],8]]  ]  ));



// ### 2

function steamrollArray(x) {

    var result = [];

    var func = function(arr) {
        if(Array.isArray(arr)) {
            for (var i = 0; i<arr.length; i++) {            
                func(arr[i]);
            }
        } else {
            result.push(arr);
        }
    }
    func(x);
    return result;
}
  
console.log('2 >',steamrollArray([  1, [2], [3, [[4]] ], 5, [6,[[[7]],8]]  ]  ));