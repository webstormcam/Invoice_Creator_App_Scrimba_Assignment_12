const arrayOfTasks = []

document.getElementById('addTask').addEventListener('click',addTask)

function addTask(){
const taskName = document.getElementById('task').value
const taskPrice = document.getElementById('priceOption').value
if(taskName){
    function task(name,price){
        this.name = name
        this.price = price
    }
  const newTask = new task(taskName,taskPrice)
  arrayOfTasks.push(newTask)
  console.log(arrayOfTasks)
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


