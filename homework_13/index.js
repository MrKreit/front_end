function addTask() {
    const taskText = document.getElementById("taskInput").value;
   // const listElement = document.getElementById("persons-list");

    if (taskText.trim() === "") {
        alert("Pleace, input new text of task");
        return;

    };
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText}🥷🏻`;
    taskItem.onclick = changeStatus;

    document.getElementById("taskList").appendChild(taskItem);

   document.getElementById("taskInput").value = "";
}
function changeStatus(event){
    if(event.target.style.textDecoration ==="line-through"){
        event.target.style.textDecoration = "none";
    } else{
        event.target.style.textDecoration = "line-through";
    }
}

