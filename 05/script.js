 // Day 5 Logical Opertaor 
 // AND | OR | NOT

 // AND(&&) ~ aur(sabhi conditioin fulfill krna)
 // OR || ~ athwa ( ya ye kro ya wo)
 // NOT ~ ulta ( jo bole uska ulta)
 // = means [assign] | == means [value cheak] | === means [value + Data_Types]


const age = 22;
const gender = "male";

if(age >= 18 && gender == "male") { // condition umar 18 | boy hona chaiye 
    console.log("you are adult male ");
    
} 


const age1 = 22;
const gender1 = "male";

if(age1 >= 18 || gender1 == "male") { // condition umar 18 | boy hona chaiye 
    console.log("you are adult male");
    
}

const number = 5;
if(number % 2 != 0) {
    console.log("Odd Numbers");
    
}
