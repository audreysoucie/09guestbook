//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function addNewName(event){
    let f = document.querySelector("#fname").value
    let l = document.querySelector("lname").value

    let names = getName()
    if(f && l){
        let name = { fname: f, lname: l}
        name.push(name)
        localStorage.setItem('names', JSON.stringify (names))
    }
    
    this.reset
}   