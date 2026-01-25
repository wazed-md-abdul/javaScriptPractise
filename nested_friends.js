let myScore= 85;
let friendScore= 70;
if(myScore >=80 ){
    if(friendScore >=80   )
    {
        console.log("Go for a lunch ");
    }
    else if ( friendScore <=80 && friendScore >=60 ){
        console.log("tell your friend, good luck next time");
    }
    else if (friendScore <=60 && friendScore >=40 ){
        console.log("keep your friend's message unseen");
    }
    else{
        console.log("Block your friend" );
    }
}
else{
    console.log(" go to home and sleep and act sad");
}   