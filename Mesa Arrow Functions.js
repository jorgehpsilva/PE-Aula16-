let fizzBuzz=(num1, num2)=>{
        for(let num=1; num <= 100; num++){
        if(num % num1 === 0 && num %num2===0){
          console.log("FizzBuzz" + num)
        }
        if(num % num1 === 0){
            console.log("Fizz " + num);
          }   
        else if(num % num2 === 0){
            console.log("Buzz " + num)
          }
          else {
            console.log(num)
          }
      }
  }
  fizzBuzz(3,7)