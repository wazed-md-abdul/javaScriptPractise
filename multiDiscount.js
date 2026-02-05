const items= 300;
const first100ItemsPrice = 100*100;
  
function itemsDiscount (numberOfItems) {
    if (numberOfItems <= 100) {
        return numberOfItems * 100;
    }
    else if (numberOfItems >= 101 && numberOfItems <= 200) {
        return first100ItemsPrice + (numberOfItems - 100) * 80;
}
    else if (numberOfItems >= 201 && numberOfItems <= 300) {
        return first100ItemsPrice + (100 * 80) + (numberOfItems - 200) * 50;
}
else {
    return console.log("You cannot order more than 300 items");

}
}
const totalPrice = itemsDiscount(items);
if(items <=300){
console.log("Total price for", items, "items is:", totalPrice);
}
