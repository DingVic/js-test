export function getFibonacciUntil(n) {
  
  //uses a nested fibonacci function
  //to calculate the value of fibonacci of n
  //append the value of fib(n) to an array
  var fibonArray = new Array
  function fib(n){

    if(n == 0){
      return 0
    }else if(n==1){
      return 1
    }

    return fib(n -1)+fib(n-2) 
  }

  var i
  for(i=0; i<n; i++){
    fibonArray.push(fib(i))
  }
  
  return fibonArray

}
