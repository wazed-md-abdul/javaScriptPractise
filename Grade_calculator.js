let result = 85;
if (result >= 80 && result <= 100) {
    console.log("You got an A+");  
}
else if (result >= 70 && result < 80) {
    console.log("You got an A");
}
else    if (result >= 60 && result < 70) {
    console.log("You got a B");
}
else if (result >= 50 && result < 60) {
    console.log("You got a C");
}
else if (result >= 40 && result < 50) {
    console.log("You got a D");
}
else if (result >= 0 && result < 40) {
    console.log("You got a F");
}
else {
    console.log("Invalid Result");
}