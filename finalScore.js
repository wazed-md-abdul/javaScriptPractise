function finalScore(omr) {
    if((omr.right+omr.wrong+omr.skip)!==100)
    {
        return "Invalid";
    }
    let totalNumber= omr.right- (omr.wrong*.5);
    let finalNumber=Math.round(totalNumber);
    return finalNumber;

}