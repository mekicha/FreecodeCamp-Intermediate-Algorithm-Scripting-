/*** Find the missing letter in the passed letter range and
**** return it.
**** If all letters are present in the range, return undefined.
***/

function fearNotLetter(str) {
	var obtainedSum = 0;
	var expectedSum = 0;
	var first = str.charCodeAt(0);
	var last = str.charCodeAt(str.length - 1);

	for(var i = 0; i < str.length; i++)
		obtainedSum += str.charCodeAt(i);

	for( var j = first; j <= last; j++)
		expectedSum += j;

	var diff = expectedSum - obtainedSum;

	if(diff > 0)
		return String.fromCharCode(diff);
	else
		return undefined;

}