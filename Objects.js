let bike = {
    color: "black",
    brandName: "Honda",
    gear: 5,
    price: "200k",
     bikeDetails:{
        bikePaper:"none",
        bikeHealth:"10years",
        bikeMilage:1000,
    },
}

for (let key in bike)
{
    console.log(key + " : " +bike[key]);
}
 console.log(bike["color"]); 