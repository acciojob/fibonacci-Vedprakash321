function fibonacci(num) {
// your code here
	
    let a=0;
	let b=1;
	let c;
	for(let i=1;i<=num;i++){
	    c=a+b;
		
		console.log(c);
		a=b;
		b=c;
		
	}
	return c;
	// let num1 = 0;
 //    let num2 = 1;
 //    let sum;
 //    let i = 0;
 //    for (i = 0; i < num; i++) {
 //        sum = num1 + num2;
 //        num1 = num2;
 //        num2 = sum;
 //    }
 //    return num2;
	
}

module.exports = fibonacci;
