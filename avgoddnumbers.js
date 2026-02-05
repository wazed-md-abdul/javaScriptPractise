function isOddnumber(num) {
    let sum=0;
    let avg;
    let oddNumbers= [];
    for (odd of num)
        {
            if (odd % 2 !== 0) {
                oddNumbers.push(odd);
    
            }
        } 
    for (let i = 0; i < oddNumbers.length; i++) {
        sum += oddNumbers[i];
    }
        avg = sum /oddNumbers.length;
        return {sum, avg};
    
}
let number= [16,78,56,23,89,53,55,44,91,47,62];
console.log(isOddnumber(number).sum + " is the sum of odd numbers");
console.log(isOddnumber(number).avg + " is the average of odd numbers");