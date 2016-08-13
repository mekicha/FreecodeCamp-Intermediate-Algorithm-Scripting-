/*** Compare two arrays and return a new array with any items 
**** only found in one of the two given arrays, but not both. 
**** In other words, return the symmetric difference of the two
****  arrays.
***/

//First variant
function diff(arr1, arr2){
  var both = arr1.concat(arr2);
  var newarr = both.filter(function(element){
    return (arr1.indexOf(element) < 0 || arr2.indexOf(element) < 0);
    
  });
  return newarr;
}

//Second variant
function diff(arr1, arr2) {
  var newArr = [];
  var both = arr1.concat(arr2);
 // return both;
  for(var i = 0; i < both.length; i++){
    if(arr1.indexOf(both[i]) < 0){
      newArr.push(both[i]);
    }
    if(arr2.indexOf(both[i]) < 0 ){
      newArr.push(both[i]);
    }
  }
  return newArr;
}