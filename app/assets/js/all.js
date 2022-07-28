const rwdBtn =document.querySelector(".rwdBtn")
const navBar = document.querySelector(".navBar")
rwdBtn.addEventListener("click",(e)=>{
    console.log(e.target.nodeName)
    if(e.target.nodeName ==="I" ){
        console.log(`hello`)
        navBar.classList.toggle("open")
    }
})