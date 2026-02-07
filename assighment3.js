



first task


function newPrice(currentPrice, discount)
 {
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    else if (discount <0 || discount >100)
    {
         return "Invalid";
    }
    
        let discountAmount= (currentPrice*discount)/100;
        let newPrice = currentPrice-discountAmount;
        return newPrice.toFixed(3);

    
}

second task


function validOtp(otp) {
    if (otp.length==8 && otp.startsWith("ph-"))
    {
        return true;
    }
    else if (typeof otp !== "string")
    {
        return "Invalid";
    }
    else 
    {
        return false;
    }
}

third task




function finalScore(omr) {
    if((omr.right+omr.wrong+omr.skip)!==100)
    {
        return "Invalid";
    }
    let totalNumber= omr.right- (omr.wrong*.5);
    let finalNumber=Math.round(totalNumber);
    return finalNumber;

}

fourth task 

function gonoVote(array) {
    let haVariable=0;
    let naVariable=0;
    if(!Array.isArray(array))
    {
        return "Invalid";
    }
    else{
    for (let vote of array)
    {
        if( vote==="ha")
        {
            haVariable++;
        }
        else if ( vote==="na")
        {
            naVariable++;
        }
    
    }
    if(naVariable< haVariable)
    {
        return true;
    }
    else if  (naVariable > haVariable)
    {
        return false;
    }
    else if (naVariable === haVariable)
    {
        return "equal";
    }
    }
}


Fifth task


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
