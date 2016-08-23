/*** Flatten a nested array. You must account for varying 
**** levels of nesting.
***/

function steamrollArray(arr) {
	var i = 0;
	while( i < arr.length) {
		arr = arr.reduce(function(a, b) {
			return a.concat(b);
		}, []);
		i++;
	}
	return arr;
}