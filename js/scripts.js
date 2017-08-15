var arrayMaker = function(num) {
	var myArray = [];
	for(var i = 2; i <= num; i++){
  	myArray.push(i);
  }
  return myArray;
};
var newArray = arrayMaker(60);
/////////////////////////////
// UPDATE use of SLICE to SPLICE
// MAKES PLACEHOLDER ARRAY DEPRECIATED
///////////////////////////
var primeFinder = function(anArray) {
	var holderArray = [];

  for(var prime = 2; prime < anArray.length; prime++){
  	holderArray = [];
    for(var j = 0; j < anArray.length; j++){
			if (j === (anArray.length - 1)) {
      	if (anArray[j] % prime === 0){
        	anArray = holderArray.slice();
      	} else {
        	holderArray.push(anArray[j]);
          anArray = holderArray.slice();
        }
      } else if (anArray[j] % prime === 0){
      	// IGNORE THIS NUM. NOT PRIME
      }
      else {
      	holderArray.push(anArray[j]);
      }
    }
  }
  //alert(anArray);
	return anArray;
}

var finalArray = primeFinder(newArray);

$(document).ready(function() {
  $("#numbers").append(finalArray + "<br/>")
});
