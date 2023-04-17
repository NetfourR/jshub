
const splitX = (sentence) =>
{
  var sentence2 = prompt(sentence)
  var index = sentence2.indexOf("X")
  var firsthalf = sentence2.slice(0, index)
  var secondhalf = sentence2.slice(index + 1)

  var length1 = firsthalf.length
  var length2 = secondhalf.length
  
  if (length1 > length2){
    console.log("The length of the first half is superior to the length of the second half the word.")
    return(firsthalf)
  }
  else{
    console.log("The length of the first half is inferior to the length of the second half the word.")
    return(secondhalf)
  }
}

splitX("Please enter a sentence:")
