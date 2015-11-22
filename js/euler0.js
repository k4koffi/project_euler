var userInput1, userInput2, answer1, answer2;
//Solution 1
function problemOne () {
	userInput1 = document.getElementById('userInput1');
	var sum = 0;
	
	for (var i = 1; i < userInput1.value ; i++) {
		if ((i % 3 === 0) || (i % 5 === 0))  {
			sum += i;
		}
		
			document.getElementById('answer1').innerHTML =  sum;		

	}
	
}

//Solution 2
function problemTwo () {
	userInput2 = document.getElementById('userInput2');
    //Declare variables to tract the first 2 terms and the sum
	var a = 1;
	var b = 2;
	var sum = 0;
	
	while (a < userInput2.value) {
		//if a is even add to sum
		if ( a % 2 === 0) {
			sum += a;
		}
		
	// variable c to hold the sum of a and b
	// Finally update a and b to reflect changes from the loop
	var c = a + b;
	a = b;
	b = c;
	
	}
	
	document.getElementById('answer2').innerHTML = sum;		

}

//Solution 3
function problemThree() {
		var userInput3 = document.getElementById('userInput3');
		factors = [];
		var d = 2;
		var n = userInput3.value;
		while (n > 2) {
			while (n % d == 0) {
				factors.push(d);
				n /= d;
			}
			d += 1;
		}
		var largestPrimeFactor = Math.max.apply(Math, factors);
			
	    var answer3 = document.getElementById('answer3').innerHTML = largestPrimeFactor;		

}

