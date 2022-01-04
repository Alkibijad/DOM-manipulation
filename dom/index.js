let textToWork = text.split("")
let textBody = document. querySelector('.text-body')


function createDivs(){
    let div = ""
    for (let i = 0; i < textToWork.length; i++) {
        div = document.createElement("div")
        div.className = "div"
        div.innerHTML = textToWork[i]
        textBody.appendChild(div)
    }

        let allDivs = document.querySelectorAll('.div')
        for (let i = 0; i < allDivs.length; i++){
                allDivs[i].addEventListener("mouseover", function(){
                this.classList.add('div-style')
  })
 }
}
createDivs()




