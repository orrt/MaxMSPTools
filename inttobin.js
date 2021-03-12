// v1.0, by Tom Orr, mail@tomorr.info, 2021
/*
- javascript exteral for max msp
- converts a (positive) integer (floats are converted to int) to it's
binary representation in list form (MSB first). 
- argument: word length i.e. how many bits to output as fixed length word
- outputs a variable length list if no argument is given
*/

var bitcount = jsarguments[1]; 

setinletassist(-1, function(){
	assist("numer: number to be converted.");
});	

setoutletassist(-1, function(){
	assist("list: binary representation.");
});	

function msg_int(i){

	outlist = new Array();

	// negative input is set to 0
	if (i < 1){
		i = 0; 
		outlist.push(0);
	}


	/// fixed length 
	if (typeof bitcount === 'number' && bitcount > 0){
	
		while (i > 0 && outlist.length < bitcount){
			outlist.push(i % 2); 
			i = Math.floor(i / 2);
		}
		// add padding 
		while (outlist.length < bitcount) outlist.push(0);
	
	/// variable length
	} else {
	
		while (i > 0){
			outlist.push(i % 2); 
			i = Math.floor(i / 2);
		}
	
	}
	
	outlet(0, outlist.reverse());

}