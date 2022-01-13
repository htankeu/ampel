const buttonOn=document.querySelector("#on")
const buttonOff=document.querySelector("#off")
const image=document.querySelector("#myImage")

buttonOn.addEventListener("click",()=>{
    image.src="bild1.jpg"
})
buttonOff.addEventListener("click",()=>{
    image.src="Bild3.webp"
})