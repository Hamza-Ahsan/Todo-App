var list = document.getElementById("list")

function addTask() {
   var todo = document.getElementById("todoo_app")
   
   if (todo.value != ""){
    var input = document.getElementById("todoo_app")
    var li = document.createElement("p")
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    list.appendChild(li)
    input.value = ""
    
    var editButton = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editButton.appendChild(editText)
    li.appendChild(editButton)
    editButton.setAttribute("class" , "editbtn")
    editButton.setAttribute("onclick" , "editRow(this)")

    
    var delButton = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delButton.appendChild(delText)
    li.appendChild(delButton)
    delButton.setAttribute("class" , "delbtn")
    delButton.setAttribute("onclick" ,"deleteRow(this)")
   }
   else {
       alert("Please Enter The Todo Task")
   }
}


function deleteRow(d) {
    d.parentNode.remove()
}


function editRow(e) {
    e.parentNode.firstChild.nodeValue;
    var edit = prompt("Enter the Edit value" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit
}

function deleteAll() {
    list.innerHTML = ""
}