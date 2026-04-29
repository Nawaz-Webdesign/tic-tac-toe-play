let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let result = document.querySelector(".result");
let msg = document.querySelector(".msg");
let turno = true;

const resetgame = () => {
  turno = true;
  enableBoxes();
  msg.classList.add("hide");
  for (let box of boxes) {
    box.style.backgroundColor = "";
  }
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = (winner) => {
  result.innerText = "Nice move!! " + winner + " Wins";
  msg.classList.remove("hide");
  disabledBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was Clicked");
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner!!", pos1val);
        showwinner(pos1val);
        boxes[pattern[0]].style.backgroundColor = "lightgreen";
        boxes[pattern[1]].style.backgroundColor = "lightgreen";
        boxes[pattern[2]].style.backgroundColor = "lightgreen";
      }
    }
  }
};

newgamebtn.addEventListener("click", resetgame);
resbtn.addEventListener("click", resetgame);
