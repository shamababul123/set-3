let year = 1920;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        console.log("This is NOT a Leap year");
    } else if(year % 400 !== 0){
        console.log("This is a Leap year!!!");
	} else {
    	console.log("This is NOT a Leap year");
	}
}
// answer(This is a Leap year!!!)