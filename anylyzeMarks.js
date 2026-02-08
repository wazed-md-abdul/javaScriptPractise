function analyzeMarks(marksObj)
{
    let totalMarks=0;
    let averageMarks=0;
    let highestScore = -Infinity;
    let lowestScore = Infinity;
    let hSub = "";
    let lSub = "";
    for (let key in marksObj)
    {
        totalMarks += marksObj[key];
        if(highestScore < marksObj[key])
        {
            highestScore = marksObj[key];
            hSub = key;
        }
        if(lowestScore > marksObj[key])
        {
            lowestScore = marksObj[key];
            lSub = key;
        }
      
    }
    averageMarks= totalMarks/Object.keys(marksObj).length;
    return {totalMarks, averageMarks, hSub , lSub};
}


console.log(analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 }))