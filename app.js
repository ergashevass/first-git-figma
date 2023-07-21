let container = document.querySelector(".container");

let cellsIdx = [];
let counter = 0;
function creatCel() {
  for (let i = 0; i < 9; i++) {
    let board = document.createElement("div");
    board.classList.add("boards");
    container.appendChild(board);
    for (let j = 1; j <= 9; j++) {
      let cells = document.createElement("div");
      cells.classList.add("cells");
      board.appendChild(cells);
      counter++;
      cells.innerHTML = counter;
      let btn = document.createElement("button");
      btn.classList.add("btn");
      cells.appendChild(btn);
      btn.innerHTML = `${i} - ${j}`;
      cells.addEventListener("click", () => {
        cells.parentElement.classList.toggle("active");
      });
     
      
    }
  }
}

creatCel();
