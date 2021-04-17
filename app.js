
const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
const resets = document.getElementById("reset");
let player = 'X'
let gameOver = false
let winner ;
function startgame(){
    playerText.textContent = `${player}'s Turn !`

    blocks.forEach(block => block.addEventListener("click", () => chooseArea(block)))
}

function chooseArea(block){
    if (block.textContent === "") {
        block.textContent = player;
        if (player === "O") {
            block.style.color = "red"
        }
        turnPlayer();
    } else {
        errorText.textContent = "Heyy, it's not empty "
        block.style.border = "2px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            block.style.border = "1px solid black"
        }, 2500)
    }

    checkWin();
    checkTie();

    if (gameOver) {
        playerText.textContent = `Game is over, ${winner} Won`;
        blocks.forEach(block => block.style.pointerEvents = 'none');
        resets.style.color ="red"
        resets.textContent = Reset;
    }
}




function  turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player}'s Turn !`
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `${player}'s Turn !`

    }
} 


function checkWin() {
    checkRows()
    checkColumns()
    checkDiagonals()
}

function checkTie() {
    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Tie !";
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
    
}







function checkRows(){
let row1 = blocks[0].textContent == blocks[1].textContent &&
    blocks[0].textContent == blocks[2].textContent &&
    blocks[0].textContent == blocks[3].textContent && blocks[0].textContent !== ""

let row2 = blocks[1].textContent == blocks[2].textContent &&
    blocks[1].textContent == blocks[3].textContent  &&
    blocks[1].textContent == blocks[4].textContent  && blocks[1].textContent !== ""

let row3 = blocks[5].textContent == blocks[6].textContent &&
    blocks[5].textContent == blocks[7].textContent  &&
    blocks[5].textContent == blocks[8].textContent  && blocks[5].textContent !== ""

let row4 = blocks[6].textContent == blocks[7].textContent &&
    blocks[6].textContent == blocks[8].textContent  &&
    blocks[6].textContent == blocks[9].textContent  && blocks[6].textContent !== ""

let row5 = blocks[10].textContent == blocks[11].textContent &&
    blocks[10].textContent == blocks[12].textContent  &&
    blocks[10].textContent == blocks[13].textContent  && blocks[10].textContent !== ""

let row6 = blocks[11].textContent == blocks[12].textContent &&
    blocks[11].textContent == blocks[13].textContent  &&
    blocks[11].textContent == blocks[14].textContent  && blocks[11].textContent !== ""

let row7 = blocks[15].textContent == blocks[16].textContent &&
    blocks[15].textContent == blocks[17].textContent  &&
    blocks[15].textContent == blocks[18].textContent  && blocks[15].textContent !== ""

let row8 = blocks[16].textContent == blocks[17].textContent &&
    blocks[16].textContent == blocks[18].textContent  &&
    blocks[16].textContent == blocks[19].textContent  && blocks[16].textContent !== ""

let row9 = blocks[20].textContent == blocks[21].textContent &&
    blocks[20].textContent == blocks[22].textContent  &&
    blocks[20].textContent == blocks[23].textContent  && blocks[20].textContent !== ""

let row10 = blocks[21].textContent == blocks[22].textContent &&
    blocks[22].textContent == blocks[23].textContent  &&
    blocks[23].textContent == blocks[24].textContent  && blocks[21].textContent !== ""


if (row1 || row2 || row3 || row4 || row5 || row6 || row7 || row8 || row9 || row10) {
    gameOver = true
}
if (row1) return winner = blocks[0].textContent
if (row2) return winner = blocks[1].textContent
if (row3) return winner = blocks[5].textContent
if (row4) return winner = blocks[6].textContent
if (row5) return winner = blocks[10].textContent
if (row6) return winner = blocks[11].textContent
if (row7) return winner = blocks[15].textContent
if (row8) return winner = blocks[16].textContent
if (row9) return winner = blocks[20].textContent
if (row10) return winner = blocks[21].textContent
}






function checkColumns(){
let col1 = blocks[0].textContent == blocks[5].textContent &&
    blocks[0].textContent == blocks[10].textContent &&
    blocks[0].textContent == blocks[15].textContent && blocks[0].textContent !== ""

let col2 = blocks[1].textContent == blocks[6].textContent &&
    blocks[1].textContent == blocks[11].textContent  &&
    blocks[1].textContent == blocks[16].textContent  && blocks[1].textContent !== ""

let col3 = blocks[2].textContent == blocks[7].textContent &&
    blocks[2].textContent == blocks[12].textContent  &&
    blocks[2].textContent == blocks[13].textContent  && blocks[2].textContent !== ""

let col4 = blocks[3].textContent == blocks[8].textContent &&
    blocks[3].textContent == blocks[13].textContent  &&
    blocks[3].textContent == blocks[18].textContent  && blocks[3].textContent !== ""

let col5 = blocks[4].textContent == blocks[9].textContent &&
    blocks[4].textContent == blocks[14].textContent  &&
    blocks[4].textContent == blocks[19].textContent  && blocks[4].textContent !== ""

let col6 = blocks[5].textContent == blocks[10].textContent &&
    blocks[5].textContent == blocks[15].textContent  &&
    blocks[5].textContent == blocks[20].textContent  && blocks[5].textContent !== ""

let col7 = blocks[6].textContent == blocks[11].textContent &&
    blocks[6].textContent == blocks[16].textContent  &&
    blocks[6].textContent == blocks[21].textContent  && blocks[6].textContent !== ""

let col8 = blocks[7].textContent == blocks[12].textContent &&
    blocks[7].textContent == blocks[17].textContent  &&
    blocks[7].textContent == blocks[22].textContent  && blocks[7].textContent !== ""

let col9 = blocks[8].textContent == blocks[13].textContent &&
    blocks[8].textContent == blocks[18].textContent  &&
    blocks[8].textContent == blocks[23].textContent  && blocks[8].textContent !== ""

let col10 = blocks[9].textContent == blocks[14].textContent &&
    blocks[9].textContent == blocks[19].textContent  &&
    blocks[9].textContent == blocks[24].textContent  && blocks[9].textContent !== ""


if (col1 || col2 || col3 || col4 || col5 || col6 || col7 || col8 || col9 || col10) {
    gameOver = true
}
if (col1) return winner = blocks[0].textContent
if (col2) return winner = blocks[1].textContent
if (col3) return winner = blocks[2].textContent
if (col4) return winner = blocks[3].textContent
if (col5) return winner = blocks[4].textContent
if (col6) return winner = blocks[5].textContent
if (col7) return winner = blocks[6].textContent
if (col8) return winner = blocks[7].textContent
if (col9) return winner = blocks[8].textContent
if (col10) return winner = blocks[9].textContent
}






function checkDiagonals(){
let dia1 = blocks[0].textContent == blocks[6].textContent &&
    blocks[0].textContent == blocks[12].textContent &&
    blocks[0].textContent == blocks[18].textContent && blocks[0].textContent !== ""

let dia2 = blocks[6].textContent == blocks[12].textContent &&
    blocks[6].textContent == blocks[18].textContent &&
    blocks[6].textContent == blocks[24].textContent && blocks[6].textContent !== ""

let dia3 = blocks[4].textContent == blocks[8].textContent &&
    blocks[4].textContent == blocks[12].textContent &&
    blocks[4].textContent == blocks[16].textContent && blocks[4].textContent !== ""

let dia4 = blocks[8].textContent == blocks[12].textContent &&
    blocks[8].textContent == blocks[16].textContent &&
    blocks[8].textContent == blocks[20].textContent && blocks[8].textContent !== ""

let dia5 = blocks[1].textContent == blocks[7].textContent &&
    blocks[1].textContent == blocks[13].textContent &&
    blocks[1].textContent == blocks[19].textContent && blocks[1].textContent !== ""

let dia6 = blocks[5].textContent == blocks[11].textContent &&
    blocks[5].textContent == blocks[17].textContent &&
    blocks[5].textContent == blocks[23].textContent && blocks[5].textContent !== ""

let dia7 = blocks[3].textContent == blocks[7].textContent &&
    blocks[3].textContent == blocks[11].textContent &&
    blocks[3].textContent == blocks[15].textContent && blocks[3].textContent !== ""

let dia8 = blocks[9].textContent == blocks[13].textContent &&
    blocks[9].textContent == blocks[17].textContent &&
    blocks[9].textContent == blocks[21].textContent && blocks[9].textContent !== ""    

if (dia1 || dia2 || dia3 || dia4 || dia5 || dia6 || dia7 || dia8) {
    gameOver = true
}
if (dia1) return winner = blocks[0].textContent
if (dia2) return winner = blocks[6].textContent 
if (dia3) return winner = blocks[4].textContent
if (dia4) return winner = blocks[8].textContent 
if (dia5) return winner = blocks[1].textContent
if (dia6) return winner = blocks[5].textContent 
if (dia7) return winner = blocks[3].textContent
if (dia8) return winner = blocks[9].textContent 
}




startgame()
