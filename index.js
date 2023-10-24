// list of all the winning combinations

let winningCombinations = [
  [1, 2, 3], // vertical
  [4, 5, 6], // vertical
  [7, 8, 9], // vertical
  [1, 4, 7], // horizontal
  [2, 5, 8], // horizontal
  [3, 6, 9], // horizontal
  [1, 5, 9], // diagonal
  [3, 5, 7], // diagonal
];

// accessing all boxes

let boxelement = document.querySelectorAll(".box");

// providing event listener to all the boxes

for (elem of boxelement) {
  elem.addEventListener("click", handleClick);
}

let click = 0;
let isWon = false;
let xAttempts = [];
let oAttempts = [];

function handleClick(event) {
  console.log(event.target.id);
  let id = event.target.id;
  let ptag = document.createElement("p");
  ptag.style.color = "#FAB201";
//   ptag.textContent = "X";
  boxelement[id - 1].appendChild(ptag);
  console.log(typeof id);

  if (click % 2 == 0) {
    ptag.textContent = "X";
    click++;
    xAttempts.push(parseInt(id));
    console.log("X", xAttempts);
    result(xAttempts, "X");
  } else {
    ptag.textContent = "O";
    click++;
    oAttempts.push(parseInt(id));
    console.log("O", oAttempts);
    result(oAttempts, "O");
  }
  console.log('click',click);

  if(click == 9 && isWon== false){
    resultbox.style.visibility = "visible";
    messagebox.textContent = "It is a Draw";
  }


}
let resultbox = document.getElementById("result");
let messagebox = document.getElementById("message");
console.log(resultbox);
console.log(messagebox);

function result(playerArray, player) {
  // console.log(player , playerArray);
  for (let i = 0; i < winningCombinations.length; i++) {
    console.log(winningCombinations[i]);
    let check = true;
    for (let j = 0; j < winningCombinations[i].length; j++) {
      if (playerArray.includes(winningCombinations[i][j]) == false) {
        check = false;
        break;
      }
      console.log(winningCombinations[i][j]);
    }
    if (check == true) {
      isWon = true;
      resultbox.style.visibility = "visible";
      messagebox.textContent = player+" Won the Match";
      console.log(player, "won the match");
    }
  }
}

let playbtn = document.getElementById("button")

playbtn.onclick=()=>{
    window,location.reload();
    // history.go(0);
    // 1 for forward , -1 for backward, 0 for reload/
}

// diff btw in and off
// let arr = ["aman","pranshu","nasir","vamshi","soumya"]
// let obj = {
//     name: "aman",
//     age: 16,
//     clg: "lpu",
//     food: "poha"
// }

// for(element of arr){                 // for values
//     console.log(element);
// }

// for(element in arr){                 // for keys    (index)
//     console.log(element);
// }

// for(element of obj){                 // we can't interate to object because objects
//                                     // are unordered whereas arrays are ordered
//     console.log(element);
// }
