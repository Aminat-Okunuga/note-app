const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// display note from local storage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// update the note in local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
showNotes();

// dynamically create the textarea on clicking on create Notes
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete-icon.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// delete textarea on clicking on delete icon
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nth => {
            nth.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// onclicking on enter key add a line break
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})