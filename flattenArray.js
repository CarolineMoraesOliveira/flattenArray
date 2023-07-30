console.log('Running main.js');

// complete the following function
function flatten(arr2d) {
    var flat = [];
        for (var i=0; i< arr2d.length; i++){
    	   for (var k=0; k<arr2d.length; k++){
             flat.push(arr2d[i][k]);
    	    }  
    	}
        return flat;
}
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);