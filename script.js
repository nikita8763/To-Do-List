const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // when no text is entered and add button is tapped
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // to add text entered one after another
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // x is added after list
        li.appendChild(span);
    }
    // after every list 
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        // unchecked changed to checked
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // when x is clicked then text is removed
        e.target.parentElement.remove();
        saveData();
    }
},false);

// to save data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// to show data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") ;
}
showTask();