let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let input = document.getElementById("taskInput");

    if(input.value==="")
        return;

    tasks.push({
        text:input.value,
        completed:false
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));

    input.value="";

    displayTasks();
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        let li=document.createElement("li");

        li.innerHTML=
        `${task.text}
        <button onclick="completeTask(${index})">✓</button>
        <button onclick="deleteTask(${index})">Delete</button>`;

        if(task.completed)
            li.classList.add("completed");

        list.appendChild(li);
    });

}

function completeTask(index){

    tasks[index].completed=!tasks[index].completed;

    localStorage.setItem("tasks",JSON.stringify(tasks));

    displayTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem("tasks",JSON.stringify(tasks));

    displayTasks();
}