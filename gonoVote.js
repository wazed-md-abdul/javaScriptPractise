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
