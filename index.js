// //string manipulation 

// //index : 0 to the length string
// //index notaion []
// var sen = "Hello World"

// // strings are objects and objects got their own functions that we can use without making

// var len = sen.length //11

// //challenge : print the last character of the sentence without using numbers

// // console.log(sen[sen.length - 1])

// //Slicing slice(beg, end)
// //beg and end are indexes

// var result = sen.slice(6, 12)
// console.log(result)

// //Todo : slice the word: World

// //replce a word in a string
// // string.replace(word we want to replace, the word that will replace it)


// var sentence = "Please visit Microsoft!, from Microsoft"

// //To do: replace Microsoft with Google
// var new_sen = sentence.replaceAll("Microsoft" , "Google")

// // console.log(new_sen)

// //string.toUpperCase()  =>changes t he letters to uppsercase
// //string.toLowerCase() => changes the letters to lowercase

// //change the new_sen to upper case and print it

// var new_sen = new_sen.toUpperCase()
// // console.log(new_sen)

// //concatenation

// // var text1 = "Hello"
// // var text2 = "World"

// // var text3 = text1.concat(" ", text2)

// // console.log(text3)

// //TODO : concatenate new_sen with sentence using a space 
// var sen3 = new_sen.concat(" ", sentence)
// // console.log(sen3)

// //create a function called endsX , it will receive a tring as a parameter
// // check if the last character of the string is x then return true
// //else return false


// //string[then index of the last element]
// //hello    o is the last character
// //5 is the length 
// //the index of o is 4
// //length - 1


// function endsX(string){
//   var length = string.length
//   if (string[length - 1] == "x"){
//     console.log("true")
//   }
//   else{
//     console.log("false")
//   }
// }


// // endsX("hellox") // this should turn true
// // endsX("Netfour") // this should turn false

// //loops
// //while loop
// // for loop


// //TODO: print hello and the i variable 6 times
// //"hello :" i;

// //increment 
// // for(let i = 0; i < 6; i++){
// //   console.log("Hello " + i)
// // }



// // for(let i = 0; i < 5; i++)
// // {
// //     console.log(i)
// // }



// var s = "Netfour"

// // for(let i = 0; i < s.length ; i++)
// // {
// //   console.log(s[i])
// // }

// // let i = 0;

// // while(i < 6)
// // {
// //   console.log("Hello " + i)
// //   i++
// // }



// //TODO: PRINT THE CHARACTERS USING WHILE LOOP
// // let i = 0
// // while (i < s.length)
// // {
// //   console.log(s[i])
// //   i++
// // }


// //SMALL CHALLHENGE

// //create a loop where you will print the characters of the snetence in uppercase
// //.toUpperCase()
// // N E T F O U R

// let i = 0
// while (i < s.length)
// {
//   var caracter = s[i]
//       console.log(caracter.toUpperCase())
//   i++
// }

// //indexOf()

// var key = "kcbhbcjewbcewkhvbekwhbvewjkba"

// console.log(key.indexOf("a"))


let sentence = "Hello World"

//1 ) begining index
//2) ending index

//if we do not precise the second argument which is the end.it slices the sentence untill the end of the string.

let first = sentence.slice(6)


// console.log(first)

//task: slice uo the "World" sentence usince slice method

//Challenge
//Create a function that takes a string as a parameter (splitX)

//declare a VARIABLE THAT HAS THE INDEX OF THE 'X' in a string (IndexOf)

//declare a variable that will store the first half of the word, starting from the begining to that index.

//declare a second variable that will store the second half of the word, starting from the index to the end of the word.

//Compare the length of both strings (first and second)

//return the longest string!


//example
//splitX("HelloXWorldbig")
// return :Worldbig

//declare a function :

//Method 1:
// const name = (params) => {  }
//Method 2:
// function name(params) { }



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

splitX("Please enter a sentence:++")