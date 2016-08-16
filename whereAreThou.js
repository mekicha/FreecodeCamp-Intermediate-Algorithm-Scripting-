/*** Make a function that looks through an array of objects 
**** (first argument) and returns an array of all objects that 
**** have matching property and value pairs (second argument). 
**** Each property and value pair of the source object has to be 
**** present in the object from the collection if it is to be in-
**** cluded in the returned array.
***/


function whatIsInAName(collection, source){

	var arr = [];

	for(var i = 0; i < collection.length; i++){
		var has = false;
		for(var prop in source){
			if(source[prop] === collection[prop])
				has = true;
			else
				has = false;

		}
		if(has)
			arr.push(collection[i]);
	}
	return arr;
}



whatIsInAName([{ first: "Romeo", last: "Montague" }, 
	{ first: "Mercutio", last: null }, 
	{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
