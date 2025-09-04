document.addEventListener('DOMContentLoaded' , () =>{
    const todoInput = document.getElementById("tasktoenter");
const addTaskList = document.getElementById("addtask");
const list = document.getElementById("todolist");

let tasks =JSON.parse(localStorage.getItem('tasks'))  || [] ;

tasks.forEach(task => renderTasks(task) )


addTaskList.addEventListener('click' , function(){
    const taskText = todoInput.value.trim();
    if(taskText === "") return;

    const newTask = {
    id: Date.now(),
    text : taskText,
    completed: false
}

tasks.push(newTask);
saveTasks();
todoInput.value = ""; //clearInput
console.log(tasks);

})

function renderTasks(task){
    const li = document.createElement("li");
    li.setAttribute("data-id" , task.id);
    li.innerHTML =`
    <span>${task.text}</span>
    <button>delete</button>
    `;

    list.addEventListener('click' , (e) => )
}
function saveTasks(){
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}
})