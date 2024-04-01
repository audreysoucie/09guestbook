//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let initial_names =
[
    {
        fname: "First",
        lname: "Name"
    }
]

function getNames(){
    if(localStorage.getItem('names') && localStorage.getItem("names") != '[]'){
        return JSON.parse(localStorage.getItem("names"))
    }else{
        return initial_names
    }
}

function addNewName(event){
    event.preventDefault()

    let f = document.querySelector("#fname").value
    let l = document.querySelector("#lname").value

    let names = getNames()
    if(f && l){
        let name = { fname: f, lname: l}
        names.push(name)
        localStorage.setItem('names', JSON.stringify (names))
    }
    location.reload()
    this.reset
}  

function resetForm(){
    location.reload()
    this.reset
}

function clearAll(){
    localStorage.clear()
    location.reload()
}


function displayNames(){
    let names = getNames()
    let names_html = ''
    let ndx = 0
    for (let n of names){
        names_html += `
        <div class="name tr mb-3" data-ndx="$ {ndx}">
        <tr>
            <th scope = "col">${n.fname}</th>
            <th scope = "col">${n.lname}</th>
        </tr>
        <div>
        `
        ndx++
    }
    document.querySelector("#names").innerHTML = names_html

    
}

document.querySelector("#myForm").onsubmit = addNewName
document.querySelector(".to-cancel").onclick = resetForm
document.querySelector("#clear").onclick = clearAll
displayNames()