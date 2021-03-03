export function areParenthesesBalanced(inputString) {
  
  //Check for correct matching parentheses
  //by tracking the number of open and closed brackets
  //in the input string
  var parentheses = []
  parentheses = inputString.split("")
  var numP = 0


  //track the number of loose open or closed brackets
  //return false if there is a close bracket when there is 
  //no open bracket
  //return true only if there is equal number of both
  var i 
  for(i = 0;i<parentheses.length;i++){

    if(parentheses[i] == "(" ){
      numP ++
    }else if((parentheses[i] == ")") &&(numP == 0)){
      return false
    }else if(parentheses[i] == ")"){
      numP --
    }
  }

  return (numP == 0)
}