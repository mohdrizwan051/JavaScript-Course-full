// guess the input

let number = 40;

let guess = 0;
  do {
    guess = parseInt(prompt("guess a number"))
    if (guess == number ) {
        break;
        alert("winner")
    }
  } while (guess != 0) 
    
