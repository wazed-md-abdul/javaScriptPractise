const randomString= ["abul","abul", "babul", "babul",  "cabul", "cabul", "dabul", "eabul"];

function getUniqueStrings(arr) {
 const uniqueSet = [];
 for( newString of arr ){
    if( uniqueSet.includes(newString) === false ){
        uniqueSet.push(newString);
    }
 }
 return uniqueSet;
}
console.log(getUniqueStrings(randomString));