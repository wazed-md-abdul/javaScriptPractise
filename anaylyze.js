function analyzeText(str) {
    if (typeof str !== "string" || str== "" ) {
        return "Invalid";
    }

    let wordsArray = str.split(" ");

    let longwords = wordsArray[0];

    for (let word of wordsArray) {
        if (word.length > longwords.length) {
            longwords = word;
        }
    }

    let token = str.split(" ").join("").length;

    return {
        longwords,
        token
    };
}