// DOM Manipulation

const div = document.createElement("div") // => intern eine ID vom JS/DOM
div.innerText ="hallo div"


function createElement(element){
    const div = document.createElement("div")
    div.innerText = `element ${element} von createElement()`
    const button = document.createElement("button")
    button.addEventListener("click", ()=>console.log("btn clicked"))
    div.append(button)

    document.body.append(div)
}


[1,2,3].forEach((element)=>{

    createElement(element)
})
document.body.append(div, div, div, div)

