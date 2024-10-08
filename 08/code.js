 // now understand abouth function in JS
 
 
 function SayHello() {
    console.log("Hello Rizwan");
    
 }
 // outside call

 SayHello() // Calling Of Function


 // parameter 
 function add(a,b,c) {
    console.log(a + b + c);
 }

 add(100, 25,25) // given input call argument
 add(20,20,20) //jo illitirate dete ha wo argument hota ha
 // coder parameteter deta hai thik hai


 function add2(num1, num2) { // parameter
    console.log(num1 + num2);
    
 }
 add2(5, 5) // argument

 function multiply(num1, num2) {
    console.log(num1 * num2);
    
 }

 multiply(20, 10)
 multiply(5, 15) // inargument only gave vlaue not any operator and also nothing any code perform all thing this is perform by function where all value given which is called parameter;

 // this above function is  not good aproach which is using

 // now understand a good Tecnique

 function multiply(a, b) {
    return a * b;

 }
 let a = multiply(2, 2)
 console.log("Hey user result is :", a)

 // unlimited multiple no 

 function addNumbers() {
    let ans = 0;

    for(let i = 0;  i < arguments.length; i++) {
        
        ans = ans + arguments[i] // value saved
    }
    return ans

 }
  let result = addNumbers(10, 10, 30,353,636,3647,3,644)
  console.log(result)  // argument is object

