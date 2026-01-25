let ticketPrice = 800;
let age = 70;
isStudent = true;
 
if (age < 10) {
    console.log("Your bus fare is free.");
}
else if (isStudent){
    ticketPrice = ticketPrice / 2;
    console.log("Your bus fare is: " + ticketPrice + " (50% student discount applied)");    
}
else if (age >= 60) {
    ticketPrice = ticketPrice / (15/100);
    console.log("Your bus fare is: " + ticketPrice + " (15% senior citizen discount applied)");

}
else {
    console.log("Your bus fare is: " + ticketPrice);
}