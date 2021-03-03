export function encryptCaesar(inputString, key) {

  //solves the casear cypher by 
  //spliting the input string into an array of char
  //and shifting each by the key
  //then the array is joined and returned
  //
  //input 
  //String: inputstring to be shifted
  //Key: int, number spaces to shift each
  //letter
  //
  //return: string with the shifted cypher
  var alph = ["a","b","c","d", "e", "f", "g", "h", "i", "j","k", "l", "m", 
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var msg =[]
  msg = inputString.toLowerCase().split("")
  var encodedMsg = []
  var i, letter

  //shifting each letter using the alphabet array
  for(i=0; i<msg.length;i++){

    if((alph.indexOf(msg[i]) + key) > alph.length){

      letter = alph[(alph.indexOf(msg[i]) +key)%alph.length]
    }else{

      letter = alph[alph.indexOf(msg[i]) +key]
    }

    encodedMsg.push(letter)

  }
  return (encodedMsg.join("").toUpperCase())
}
