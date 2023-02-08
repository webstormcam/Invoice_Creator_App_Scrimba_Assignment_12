const arrayOfTasks = []

document.getElementById('addTask').addEventListener('click',addTask)

function addTask(){
let taskName = document.getElementById('task')
const taskPrice = document.getElementById('priceOption').value
if(taskName.value){
    function task(name,price){
        this.name = name
        this.price = price
    }
  const newTask = new task(taskName.value,taskPrice)
  arrayOfTasks.push(newTask)
  taskName.value=""
  
}
renderTasks()
}



function renderTasks(){
    const tasks = document.getElementById('taskOutput')
    let output=""
    for(let currentTask of arrayOfTasks){
output+=`<div class="listed-task">
<div class="task-title-&-remove">
<p class="task-word-style">${currentTask.name}</p>
</div>
<div class="class="task-word-style""><p><span>$</span>${currentTask.price}</p></div>
</div>`
    }
    tasks.innerHTML = output
}


