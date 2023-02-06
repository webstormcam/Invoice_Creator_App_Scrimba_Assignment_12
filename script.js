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

}


