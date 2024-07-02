let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container")
let turnO = true;

// 2d aaray: for storing winning patterns
const winningPatterns = 
[[0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]];

const resetGame =() =>{
    turnO = true;
    enabledbox();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       
        if (turnO === true){
           box.innerText = "O";
           turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
       box.disabled = true;
       checkWinner();
    })
});
const disabledbox = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enabledbox = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations!!!, Winner is ${winner}`;
    msgcontainer.classList.remove ("hide") ;
    disabledbox();
}
const checkWinner = () => {
    for(let patterns of winningPatterns ){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        
    if (pos1val != "" && pos2val != "", pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            console.log("winner" , pos1val);
            showWinner (pos1val);
        }
    }
          
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
