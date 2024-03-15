// Age Calculator

const input = document.querySelector("#input")

function Add(){
    const birthdate  = (input.value).substr(0,4) 
    const presentYear  = new Date().getFullYear()
    console.log(presentYear - birthdate)
    para.innerHTML = `Your age is \ ${presentYear - birthdate}`
}