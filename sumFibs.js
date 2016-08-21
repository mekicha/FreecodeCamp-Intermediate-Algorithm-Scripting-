/*** Given a positive integer num, return the sum of all odd
****  Fibonacci numbers that are less than or equal to num.
***/

function fibs(num){
  if(num === 0)
    return 0;
  else if(num === 1)
    return 1;
  else
    return fibs(num - 1) + fibs(num - 2);
}

function isodd(num) {
  if( num % 2 === 1)
    return true;
  return false;
}

function sumFibs(num) {
  var sum = 0;
  var fib = 0;
  var i = 1;
  while( i <= num ){
    fib = fibs(i);
    if(isodd(fib) && fib <= num)
      sum +=fib;
    i += 1;
  }
  return sum;
  
}

//alternative solution by @Rafase282
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return result;
}

sumFibs(4);

