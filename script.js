const arrayOfTasks = []

document.getElementById('addTask').addEventListener('click',addTask)

function addTask(){
let taskName = document.getElementById('task')
const taskPrice = document.getElementById('priceOption').value
for(let task of arrayOfTasks){
    if(task.name.toLowerCase()===taskName.value.toLowerCase()){
        taskName.value=""
        taskName.placeholder="Enter in a new task!"
        return

    }
}
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
    const tasksPlusTotal = document.getElementById('taskOutput')
    let taskOutput=""
    let TotalAmountOutput=""
    let total=0
    for(let i=0; i<arrayOfTasks.length; i++){
taskOutput+=`<div class="listed-task">
<div class="task-title-and-remove">
<p class="task-word-style">${arrayOfTasks[i].name}</p>
<button class="remove-btn" data-item="${[i]}">Remove</button>
</div>
<div class="task-price-style"><p><span class="grey-dollar">$</span>${arrayOfTasks[i].price}</p></div>
</div>`
    }
    TotalAmountOutput=`
    
    
    
    
    
    
    `
    tasksPlusTotal.innerHTML = taskOutput
}


