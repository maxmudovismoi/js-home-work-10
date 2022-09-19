let width = document.querySelector("#width")
let height = document.querySelector("#height")
let border = document.querySelector("#border")
let color = document.querySelector("#color")
let btnSubmit = document.querySelector(".btnSubmit")
let block = document.querySelector("#block")
let valWidth = 0
let valHeight = 0
let valBorder = 0
let valColor = ""

width.addEventListener("keyup",(event) => {
    valWidth = event.target.value;
})
height.addEventListener("keyup",(event) => {
    valHeight =  event.target.value;
})
border.addEventListener("keyup",(event) => {
    valBorder =  event.target.value;
})


btnSubmit.addEventListener("click", ()=>{
   valColor =  color.value
    block.style.width = valWidth + "px"
    block.style.height = valHeight + "px"
    block.style.border = 'red black solid'
    block.style.borderRadius =  valBorder + "px"
    block.style.backgroundColor = valColor 
})
