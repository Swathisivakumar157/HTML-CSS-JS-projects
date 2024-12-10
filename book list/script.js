var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("add-popup-button")
addbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdesinput=document.getElementById("book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdesinput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}