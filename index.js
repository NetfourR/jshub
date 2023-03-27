
let choice_user = prompt("Choose between rock, paper and scissors.")

let choice_computer = Math.floor(Math.random() * 3)


if (choice_computer == 1){
  choice_computer = "Rock"
}
else if (choice_computer == 2){
  choice_computer = "Paper"
}
else{
  choice_computer = "Scissors"
}

const game = (computer, user)  =>{
  if (computer == user)
  {
    console.log("Even")
  }
  else if (user == "Rock"){
    if (computer == "Paper"){
      console.log("Computer wins.")
    }
    else{
      console.log("You win.")
    }
  }
  else if (user == "Paper"){
    if (computer == "Scissors"){
      console.log("Computer wins.")
    }
    else{
      console.log("You win.")
    }
  }
  else if (user == "Scissors"){
   if (computer == "Rock"){
     console.log("Computer wins.")
   }
    else{
      console.log("You win.")
    }
  }
  else{
    console.log("Invalid input.")
  }
}

console.log("Computer choice: " + choice_computer)
console.log("User choice: " + choice_user)
game(choice_computer, choice_user)