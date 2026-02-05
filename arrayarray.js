const words = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'do'];
let small= words[0];
for (let i = 1; i < words.length; i++) {
    if(words[i].length<small.length){
        small=words[i];
    }

}
console.log('The smallest word is:' + small);