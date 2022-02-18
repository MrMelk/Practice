import Task from "./Task"


//details how the a task is set up, supports delete, toggle method from App
const Tasks = ({ tasks, onDelete, onToggle }) => {
    
  return (

    <>
     {tasks.map((task) => (
     <Task key = {task.id} //sets key to be id
     task = {task}
     onDelete = {onDelete} 
     onToggle = {onToggle}/>
     ))}
    </>
  )
}

export default Tasks