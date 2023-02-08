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






function deleteItem(selectedItem){
    arrayOfTasks.splice(selectedItem,1)
    renderTasks()
    }



document.addEventListener('click',function(e){
    if(e.target.dataset.item){
        deleteItem(e.target.dataset.item)
    }
})



function renderTasks(){
    const tasks = document.getElementById('taskOutput')
    let output=""
    for(let i=0; i<arrayOfTasks.length; i++){
output+=`<div class="listed-task">
<div class="task-title-&-remove">
<p class="task-word-style">${arrayOfTasks[i].name}</p>
<button class"remove-btn" data-item="${[i]}"> remove </button>
</div>
<div class="class="task-word-style""><p><span>$</span>${arrayOfTasks[i].price}</p></div>
</div>`
    }
    tasks.innerHTML = output
}


