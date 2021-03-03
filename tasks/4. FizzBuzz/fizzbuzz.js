export function getFizzBuzzUntil(n) {
  
  //Initialize an array to store the fizzbuzz
  //if n is divisible by 3, add fizz to the array
  //if n is divisible by 5, add buzz to the array
  //if n is divisible by 3 and 5, add fizzbuzz to the array
  //else add n to the array
  //return the array at the end
  var fizzBuzz =[]

  var i
  for(i=0;i<n;i++){
    if(((i+1)%3 == 0)&&((i+1)%5== 0)){
      fizzBuzz.push("FizzBuzz")
    }else if((i+1)%3== 0){
      fizzBuzz.push("Fizz")
    }else if((i+1)%5 == 0){
      fizzBuzz.push("Buzz")
    }else{
      fizzBuzz.push(i+1)
    }
  }

  return fizzBuzz
}
