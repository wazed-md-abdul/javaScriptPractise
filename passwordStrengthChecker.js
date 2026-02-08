function checkPassword(password)
{   
    let reason= [];
    let hasNumber= false;
    let hasUppercase= false;
    let hasLowercase= false;
    let hasSpace= password.includes(" ");
    let passwordLength= password.length;
    let passwordLengthReq= false;

    if(password.length >= 8 )
        {
            passwordLengthReq= true;

        }  
    for(let char of password)
    {
        if(char <= "9" && char >= "0")
            hasNumber= true;
        if(char <= "Z" && char >= "A")
            hasUppercase= true;
        if(char <= "z" && char >= "a")
            hasLowercase= true; 

    }
    if(passwordLengthReq===false){
        reason.push("Length must be at least 8 characters !!")
    }
    if(hasLowercase===false)
    {
        reason.push("LowerCase Missing !!")
    }
    if(hasUppercase===false)
    {
        reason.push("UpperCase Missing !!")
    }
    if(hasNumber===false)
    {
        reason.push("Number Missing !!")
    }
    if(hasSpace===true)
    {
        reason.push("Must not contain spaces!!")
    }
    let isValid=false;
    if(reason.length===0)
    {
        isValid=true;
    }
    return {
        valid:isValid,
        reason
    }
}


 console.log(checkPassword(" "))
