 // Arror function --> this is used commanly in JS

  // Arrow Function -->
  
// 1.Syntax

const SayHelloe = () => {
    console.log("hey hello bro this is Arrow Function");
    
  }
  SayHelloe()
  
  // 2. Argument dena
  
  const add4 = (a,b) => {
      sum = a + b;
      return sum
  }
  console.log(add4(900, 800))
  
  
  // 3. argument Keywolrd
  
  const addNumbers9 = (...nums) => {  //spread operator
    console.log(nums);
  }
  addNumbers9(20,44,46,354,354,254,22,54,45);


  //3.  Hosting ONLY AVIALBLE IN NORMAL FUNCTION


  sayHey()
  function sayHey() {
    console.log("ka ho hosting baba pahle se jaan gye function call");
    
  }

  // This Keyword

  
  