let arrayOfTasks = []

document.getElementById('addTask').addEventListener('click',addTask)

// Adds the task to the total
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
  const newTask = new task(taskName.value,parseInt(taskPrice))
  arrayOfTasks.push(newTask)
  taskName.value=""
  
}
renderTasks()
}





// Function that will remove the item from the invoice list
function deleteItem(selectedItem){
    arrayOfTasks.splice(selectedItem,1)
    renderTasks()
    }



document.addEventListener('click',function(e){
    if(e.target.dataset.item){
        deleteItem(e.target.dataset.item)
    }
})


// This renders the all of the task section of the page
function renderTasks(){
    const tasksPlusTotal = document.getElementById('taskOutput')
    let taskOutput=""
    let TotalAmountOutput=""
    let total=0
    for(let i=0; i<arrayOfTasks.length; i++){
        total+=arrayOfTasks[i].price
taskOutput+=`<div class="listed-task">
<div class="task-title-and-remove">
<p class="task-word-style">${arrayOfTasks[i].name}</p>
<button class="remove-btn" data-item="${[i]}">Remove</button>
</div>
<div class="task-price-style"><p><span class="grey-dollar">$</span>${arrayOfTasks[i].price}</p></div>
</div>`
    }
    TotalAmountOutput=`
    <div class="total-amount-style">
    <h2 class="task-title-total">NOTES</h2>
    <h2 class="task-title-total">TOTAL AMOUNT</h2>
    </div>
    <div class="total-amount-desc-style">
    <p class="notes-txt">We accept cash, credit card, or PayPal</p>
    <p class="large-num">$${total}</p>
    </div>
    <button id="sendInvoice" class="Invoice-BTN"> <i class="fa-solid fa-envelope"></i> Send invoice</button>
    `
    tasksPlusTotal.innerHTML = taskOutput
    tasksPlusTotal.innerHTML+=TotalAmountOutput
    function sendTasks(){
        arrayOfTasks = []
        renderTasks()
             
       }
    document.getElementById('sendInvoice').addEventListener('click',sendTasks)
}




renderTasks()










