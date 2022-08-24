function checkInput() {
    let filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    const input = document.querySelector("input")
    const warnSign = document.querySelector(".errorimg")
    const warnTexts = document.querySelector(".errortext")
    

    if(String(input.value).search(filter) === -1){
        console.log(false, warnSign)
        input.style.border = "solid 1px red"
        warnSign.style.display = "initial"
        warnSign.style.position = "relative"
        warnSign.style.left = "8.5rem"
        warnSign.style.top = "-2.8rem"
        warnTexts.innerText = "Please provide a valid email"

    } else {
        console.log(true)
        input.style.border = "solid 1px  var(--Desaturated-Red)"
        warnSign.style.display = "none"
        warnTexts.innerText= ""
    }

}