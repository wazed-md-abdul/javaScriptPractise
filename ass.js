// function analyzeText(str) {
//     if ( typeof str !== "" )
//     {
//         return "Invalid";
//     }
//    let  newString =str.split(" ");
//    let newObject={};
//    let longWords=str[0];
//    for (let words of newString )
//    {    
//         if (words.length > longWords.length)
//         {
//             longWords= words;
//         }
//    }
//    return longWords;
// }
// console.log(analyzeText("I am a little honest person"));
    let str="I am a little honest person";
let  newString =str.split(" ");
   let newObject={};
   let longWords=str[0];
   for (let words of newString )
   {    
        if (words.length > longWords.length)
        {
            longWords= words;
        }
   }
   console.log(longWords);
   let token = str.split(" ").join("").length;
   console.log(token);