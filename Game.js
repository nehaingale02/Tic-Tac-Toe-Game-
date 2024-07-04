let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let drawmsg = document.querySelector("#drawmsg");
let msgcontainer = document.querySelector(".msg-container");
let turnO = true; // player X , player O  --> game starts with a player O where ,O is printed on box
let count = 0; //To Track Draw
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
    count = 0;
    enabledbox();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       
        if (turnO === true){   // Function is used to print alternate "O" & "X" on buttons
           box.innerText = "O";
           turnO = false;  // SET IT TO FALSE FOR PLAYER X TO PLAY NEXT MOVE.
        }else{
            box.innerText = "X";
            turnO = true;
        }
       box.disabled = true;  //After the turn of player ends, button is set to disabled .
       count++;

       let isWinner = checkWinner();
   
       if (count === 9 && !isWinner) {
         gameDraw();
       }
    })
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disabledbox();
};
const disabledbox = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enabledbox = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulations!!!, Winner is ${winner}`;
    msgcontainer.classList.remove ("hide") ;
    disabledbox();
};
const checkWinner = () => {
    for(let patterns of winningPatterns ){             //paterns :- array value
        let pos1val = boxes[patterns[0]].innerText;    //paterns[0],pattern[1],pattern[2]-->
        let pos2val = boxes[patterns[1]].innerText;    //postions or indexes of each pattern 
        let pos3val = boxes[patterns[2]].innerText;  
        
    if (pos1val != "" && pos2val != "", pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            console.log("winner" , pos1val);
            showWinner (pos1val); // 
        }
    }
          
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
