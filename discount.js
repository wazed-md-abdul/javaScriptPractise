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