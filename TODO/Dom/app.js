
var a = document.getElementById('main')
var b = document.getElementById('input')
var x = document.getElementById('lol')
function inp(){
    var newButton = document.createElement('BUTTON')
    var newPara = document.createElement("P")
    var text = b.value
    text = document.createTextNode(text)
    newButton = document.createTextNode(text)
    newPara.setAttribute('class','pera')
    newPara.appendChild(text)
    x.appendChild(newPara)
    a.appendChild(x)
    
    var deleteBtn = document.createElement('BUTTON')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.setAttribute('onclick','deleteTodo(this)')
    deleteBtn.setAttribute('class','btn')
    deleteBtn.appendChild(deleteBtnText)
    newPara.appendChild(deleteBtn)
    
    var editBtn = document.createElement('BUTTON')
    var editBtnText = document.createTextNode('Edit')
    editBtn.setAttribute('onclick','editTodo(this)')
    editBtn.setAttribute('class','btn')
    editBtn.appendChild(editBtnText)
    newPara.appendChild(editBtn)


    b.value = " "
}
function editTodo(e){
    var pop = document.createTextNode(prompt("Edit Here"))
    var c = e.parentNode.firstChild
    c.replaceChild(pop , e.parentNode.firstChild)
}

function deleteTodo(e){
    e.parentNode.remove()
}
function del(){
    lol.innerHTMl = " "
}