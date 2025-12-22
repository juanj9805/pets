const buttonColor = document.querySelector("#button-1")
const buttonText = document.querySelector("#button-2")
const buttonDuplicate = document.querySelector("#button-3")

window.addEventListener("load", ()=>{
    alert("Welcome to Miwi")
})

buttonColor.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e);
    buttonColor.style.backgroundColor = "black";
})

buttonText.addEventListener("click", (e)=>{
    e.preventDefault()
    buttonText.textContent = ""
})

buttonDuplicate.addEventListener("click", (e)=>{
    e.preventDefault()
    buttonDuplicate.textContent = "Duplicate text Duplicate text"
})


