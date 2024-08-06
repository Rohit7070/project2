let boxes=document.querySelectorAll(".box")
let turn=true
let winpattern=[[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [3,4,5],
                [6,7,8] ]


let reset=document.querySelector("#reset")    
let msg=document.querySelector("#msg") 
let newbtn=document.querySelector("#msg-btn")
let msgcontainer=document.querySelector(".msg-container")



const showwinner=(winner)=>{
    msg.innerText=`Congratulations !!! Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    for(let box of boxes){
        box.disabled=true
    }
    
}

const newnreset=()=>{
    for(let box of boxes){
        box.innerText=""
        box.disabled=false
        msgcontainer.classList.add("hide")
    }
}

reset.addEventListener("click",newnreset)
newbtn.addEventListener("click",newnreset)


const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1===pos2 && pos2===pos3){
     showwinner(pos1)
    }
}
}
}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turn){
    box.innerText="X"
    turn=false
}
else{
    box.innerText="0"
    turn=true
}
box.disabled=true
checkwinner()
})
})
