// const friends = ["Alice", "Bob", "Charlie"];
// console.log(friends.includes("Alice"));
// console.log(friends.includes("David"));
const fruits = ['Apple', 'Banana', 'Cherry'];
const vegetables = ['Carrot', 'Broccoli', 'Spinach'];

const food = fruits.concat(vegetables);
let num;
console.log("Original Array 1:", fruits);
console.log("Original Array 2:", vegetables);
console.log("Combined Array:", food);
for (let i = 0; i < food.length; i++) {
    console.log( food[i]);
}
while (food.length > 0) {
    // const removedItem = food.pop();
    // console.log("Removed Item:", removedItem);
    // console.log("Array after pop:", food);
    food.push('NewItem');
    break ; // To prevent infinite loop in this example
}
// console.log("Array after pop:", food);
// let index = food.indexOf('Banana');
// console.log("Index of 'Banana':", index);
// index = food.indexOf('Manguu');
// console.log("Index of 'Mango':", index);
// console.log(index === -1 ? "'Mango' not found in the array." : "'Mango' found at index:", index);
for(num of food){
    console.log(num);
}
