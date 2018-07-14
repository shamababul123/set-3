let isRaining = true;
let isSnowing = false;
let windSpeed = 16;
let isCloudy = true;
if (isRaining === true && isSnowing === true && windSpeed < 15 && isCloudy === false) {
    console.log("SUCCESS!! The weather is good for launch!");
} else {
    console.log("FAIL!! The weather is NOT good for launch");
}
// answer(FAIL!! The weather is NOT good for launch)