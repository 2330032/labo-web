var turnFlag = 0;
var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
var winner;

btn1 = document.getElementById("b1");
btn2 = document.getElementById("b2");
btn3 = document.getElementById("b3");
btn4 = document.getElementById("b4");
btn5 = document.getElementById("b5");
btn6 = document.getElementById("b6");
btn7 = document.getElementById("b7");
btn8 = document.getElementById("b8");
btn9 = document.getElementById("b9");


function init(){
    
    btn1.innerHTML = "";
    btn2.innerHTML = "";
    btn3.innerHTML = "";
    btn4.innerHTML = "";
    btn5.innerHTML = "";
    btn6.innerHTML = "";
    btn7.innerHTML = "";
    btn8.innerHTML = "";
    btn9.innerHTML = "";

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;

    turnFlag = 0;
}

function playerTurnFlag(){

    if(turnFlag === 1){
        turnFlag = 0;
    } else if (turnFlag === 0){
        turnFlag = 1;
    }
}

function onWin(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    // Confetti + declare winner

}

function gameStatusCheck(){

    if(btn1.innerHTML === btn2.innerHTML && btn2.innerHTML === btn3.innerHTML && btn1.innerHTML !== ""){
       winner = btn1.innerHTML;       
        onWin();
    }
    if(btn1.innerHTML === btn5.innerHTML && btn5.innerHTML === btn9.innerHTML && btn1.innerHTML !== ""){
        winner = btn1.innerHTML;
        onWin();
    }
    if(btn1.innerHTML === btn4.innerHTML && btn4.innerHTML === btn7.innerHTML && btn1.innerHTML !== ""){
        winner = btn1.innerHTML;
        onWin();
    }
    if(btn2.innerHTML === btn5.innerHTML && btn5.innerHTML === btn8.innerHTML && btn2.innerHTML !== ""){
        winner = btn2.innerHTML;
        onWin();
    }
    if(btn3.innerHTML === btn5.innerHTML && btn5.innerHTML === btn7.innerHTML && btn3.innerHTML !== ""){
        winner = btn3.innerHTML;
        onWin();
    }
    if(btn3.innerHTML === btn6.innerHTML && btn6.innerHTML === btn9.innerHTML  && btn3.innerHTML !== ""){
        winner = btn3.innerHTML;
        onWin();
    }
    if(btn4.innerHTML === btn5.innerHTML && btn5.innerHTML === btn6.innerHTML && btn4.innerHTML !== ""){
        winner = btn4.innerHTML;
        onWin();
    }
    if(btn7.innerHTML === btn8.innerHTML && btn8.innerHTML === btn9.innerHTML && btn7.innerHTML !== ""){
        winner = btn7.innerHTML;
        onWin();
    }
}

function onButtonClick(element){

    if (turnFlag === 0){
        element.innerHTML = "X"
    } else if (turnFlag === 1){
        element.innerHTML = "O"
    }

    playerTurnFlag();  
    element.disabled = true;
    gameStatusCheck();
}