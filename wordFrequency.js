let sentence = "I love JS and I love coding and JS is fun fun fun fun fun";
let sentenceM=sentence.toLowerCase().split(" ");
let countWords={};
function countWordsProgram(sentenceY){
    for(let words of sentenceY)
    {
    if(countWords.hasOwnProperty(words))
    {
        countWords[words]++;
    }
    else 
    {
        countWords[words]=1;
    }
    }
    return countWords;
}
console.log(countWordsProgram(sentenceM));
console.log(sentenceM);