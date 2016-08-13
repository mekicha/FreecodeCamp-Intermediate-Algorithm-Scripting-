/*** We'll pass you an array of two numbers. Return the sum 
**** of those two numbers and all numbers between them.
**** The lowest number will not always come first.
***/

function sumAll(arr){
	var min = Math.min(arr[0], arr[1]);
	var max = Math.max(arr[0], arr[1]);
	var sum = 0;
	for(var i = min; i <= max; i++){
		sum += i;
	}
	return sum;
}

//second variant

function sumAll(arr) {
  var mx = Math.max(arr[0],arr[1]);
  var mn = Math.min(arr[0], arr[1]);
  var list = [];
  for(var i = mn; i < mx+1; i++){
    list.push(i);
  }
  var sum = list.reduce(function(a,b){
    return a + b;
  });
  return sum; 
}
