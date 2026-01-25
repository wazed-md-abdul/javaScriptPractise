let weight =68;
let heightInFeet =5.11;
let height= heightInFeet * 0.35294; 
let BMI= weight/(height*height);
if(BMI <18.5){
    console.log("You are Underweight");
}
else if(BMI >=18.5 && BMI <=24.9){
    console.log("You are Normal");
}
else if(BMI >=25 && BMI <= 29.9){
    console.log("You are Overweight");  
}   
else{
    console.log("You are Obese");
}