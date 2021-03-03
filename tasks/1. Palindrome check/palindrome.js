export function isPalindrome(inputString) {
  

  //to check if the input string is a palindrome
  //the string is reversed
  //if the reverse is the same as the input
  //return true
  var scrubbed = inputString.replace(/\\s+/g, "").toLowerCase()
  var reverse = ''
  var scrubbedChar = new Array
  scrubbedChar = scrubbed.split("")

  var i
  for (i = 0; i< scrubbedChar.length; i++){
    reverse += scrubbedChar[scrubbedChar.length -i-1]
  }

  return (reverse==inputString)
}