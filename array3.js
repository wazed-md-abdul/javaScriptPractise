// let strings= "Life is beautiful and wonderful";
// let stringsArray = strings.toLowerCase();
// if (stringsArray.includes('a') && stringsArray.includes('e') && stringsArray.includes('i') && stringsArray.includes('o') && stringsArray.includes('u')) { console.log("The string contains all the vowels."); }
// else { console.log("The string does not contain all the vowels."); }
// let strings = "This is Mr X , This Is Mr x";
// if(strings.includes('x') && strings.includes('X'))
// {
//     let newString = strings.replace(/x/g, 'A').replace(/X/g, 'A');
//     console.log(newString);
// } 
// else {
//   console.log('There is no x or X in the string')
// }
function titleCase(str) {
  // ১. সব ছোট হাতের করে অ্যারে বানানো
  var splitStr = str.toLowerCase().split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    // ২. প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের করা + বাকি অংশ জোড়া দেওয়া
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  // ৩. অ্যারে থেকে আবার স্ট্রিং-এ রূপান্তর
  return splitStr.join(" ");
}

console.log(titleCase("I'm a little tea pot")); 
// আউটপুট: "I'm A Little Tea Pot"