/*** Create a function that sums two arguments together. If only
**** one argument is provided, then return a function that expects
**** one argument and returns the sum.
***/

function addTogether() {
  if(arguments.length === 1){
    var x = arguments[0];
    if(typeof x !== 'number')
      return undefined;
    return function (y){
      if(typeof y !== 'number')
        return undefined;
      return x + y;
    };
  }
  else{
    if(typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number')
      return undefined;
    return arguments[0] + arguments[1];
  }
    
}

addTogether(2, "3");