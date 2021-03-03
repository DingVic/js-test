export function Reduce(array, reducer, initialValue) {


  //Create a new value adding each value in the array
  //to the accumlated value, starting with the 
  //initial value
  var newValue
  var i
  for(i=0; i<array.length; i++){

    if(i == 0){

      newValue = reducer(initialValue, array[i])
    }else{

      newValue = reducer(newValue, array[i])
    }
    
  }

  return newValue
  
}
