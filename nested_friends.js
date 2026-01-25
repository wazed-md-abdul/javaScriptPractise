let myScore= 78;
let friendScore=39;
if(myScore >=80)
{
    if(friendScore >=80)
    {
        console.log(" go for a lunch");
    }
    else if ( friendScore >=60 && friendScore <80)
    {
        console.log(" good luck next time");
    }
    else if (friendScore <=60 && friendScore >40)
    {
       console.log("keep your friend's message unseen");
    }
    else {
        console.log("Block your friend");
    }
}
else {
    console.log("go to home and sleep and act sad");
}