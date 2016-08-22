/*** Find the smallest common multiple of the provided parameters
**** that can be evenly divided by both, as well as by all 
**** sequential numbers in the range between these parameters.
**** The range will be an array of two numbers that will not
**** necessarily be in numerical order.
***/

function gcd(a , b) {
	if(b === 0)
		return a;
	else
		return gcd(b, a % b);
}

function smallestCommons(arr) {
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var array = [];
	for(var i = max; i >= min; i--)
		array.push(i);

	var lcm = array[0];
	for( i = 1; i < array.length; i++){
		var GCD = gcd(lcm, array[i]);
		lcm = (lcm * array[i]) / GCD;
	}
	return lcm;

}

smallestCommons([1,5]); //-> 60
