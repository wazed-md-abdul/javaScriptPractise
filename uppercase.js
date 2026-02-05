let word= " This is my job ";
let words= " this is my job";
 if (word.trim().toUpperCase() === words.trim().toUpperCase()) {
    console.log("The words are equal (case-insensitive).");
 }else {
    console.log("The words are not equal.");
 }