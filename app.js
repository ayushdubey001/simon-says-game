let gameStart = false;
let level = 0;
let colors = ["red","yellow","green","blue"]
let userSeq = []
let gameSeq = []
let h3 = document.querySelector("h3")



document.addEventListener("keypress",function(){
    if(gameStart == false){
        gameStart = true;
        levelup();
    }
})

function boxFlash(box){
    box.classList.add("white")
    setTimeout(function(){
        box.classList.remove("white")
    },250)
}
function userFlash(box){
    box.classList.add("userFlash")
    setTimeout(function(){
        box.classList.remove("userFlash")
    },250)
}

function levelup(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`
    let randNo = Math.floor(Math.random()*3);
    let randColor = colors[randNo]
    let randbox = document.querySelector(`.${randColor}`)
    boxFlash(randbox)
    gameSeq.push(randColor)
    console.log(gameSeq);
    
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h3.innerHTML = `Game Over!<br>your score was <b>${level}<b><br>Press any key to start again`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150)
        reset();
    }
}

function boxPress(){
    let box = this
    userFlash(box)
    let userColor = box.getAttribute("id");
    userSeq.push(userColor)
    // console.log(userSeq);
    checkAns(userSeq.length - 1)
}

let allBoxes = document.querySelectorAll(".box")
for(box of allBoxes){
    box.addEventListener("click",boxPress)
}

function reset (){
    gameStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}