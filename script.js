let userseq = []
let gameseq = []
let highscore = []
let btns = ["yellow" , "green" , "blue" ,"red"]
let h2 = document.querySelector("h2")
let body = document.querySelector("body")
let playgame = false;
let level = 0;

document.addEventListener("keypress" , function(){
    if(playgame === false){
        playgame = true;
        levelup();
    }
})


function btnflash(randbtn){
    randbtn.classList.add("flash");
    setTimeout(()=>{
        randbtn.classList.remove("flash")

    },500)
    
}
function userflash(btn){
  btn.classList.add("change");
    setTimeout(()=>{
        btn.classList.remove("change")

    },250)
    
}
function reset(){
    level = 0;
    userseq=[];
    gameseq=[];
    playgame = false;
}
function checkans(idx){

if(userseq[idx] == gameseq[idx]){
  if(userseq.length == gameseq.length){
   setTimeout(
    levelup()
   ,1000)
  }
}else{
   body.classList.add("warn")
   setTimeout(()=>{
    body.classList.remove("warn")  
    },500)
    h2.innerText = `GameOver! and your score is ${level-1}. 
    Press Any key to restart the game`
   
    reset();
 

}

}
function levelup(){
    userseq = []
    level++;
    h2.innerText  = `Level ${level}`
    let randind  = Math.floor(Math.random()*3)
    let randclr = btns[randind]
    gameseq.push(randclr)
    console.log(gameseq)
    let randbtn = document.querySelector(`#${randclr}`)
   btnflash(randbtn)
}
function btnpress(){
   
    let btn  = this;
   userflash(btn);
   userclr = btn.getAttribute("id")
   
   userseq.push(userclr)
   
   checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
   btn.addEventListener("click",btnpress
    )
}
