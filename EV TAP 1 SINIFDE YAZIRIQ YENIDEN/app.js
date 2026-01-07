let inputs = document.querySelector("input")
let setBtn = document.querySelector("#set")
let getBtn = document.querySelector("#get")
let p = document.querySelector("p")


setBtn.addEventListener("click", ()=>{
    localStorage.setItem("car",inputs.value)
})

getBtn.addEventListener("click", ()=>{
    let melumat = localStorage.getItem("car")
    p.innerText = melumat
})