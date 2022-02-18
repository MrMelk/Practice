import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"
import Footer from "./Components/Footer"
import About from "./Components/About"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //get tasks from server and set them on frontend
  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])//dependency array

  //Fetch Tasks, gets all tasks from our json server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }
  //Fetch Task gets a specific task from the server
  const fetchTask = async (id) => {
    //make request
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    //get the data from the request
    const data = await res.json()
    //return the data
    return data
  }

  //Add Task, adds task
  const addTask = async (task) => {
    /*const id = Math.floor(Math.random() * 1000) + 1//here we would get it from backend
    const newTask = { id, ...task }
    
    setTasks([...tasks, newTask])*/
    const res = await fetch("http://localhost:5000/tasks", {
     method: "POST",
     headers: {
       "content-type": "application/json"
     },
     body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  //Delete task, deletes task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {method: "DELETE",})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder, toggles reminder of task
  const toggleReminder = async (id) => {
    //get task from server
    const taskToToggle = await fetchTask(id)
    //change only reminder of task and keep the rest
    const updTask = {...taskToToggle,
    reminder: !taskToToggle.reminder }
    
    //update server
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updTask)
    })
    
    const data = await res.json()

    //update frontend
    setTasks(tasks.map((task) => task.id  === id 
    ? {...task, reminder: data.reminder} : task))
  }
  //What is showing on our website, uses container css class
  return ( <Router>
    
    <div className="container"> 
      <Header onAdd = {() => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask} />
      <Routes>
      <Route 
      path = "/" 
      element = {<>
        {showAddTask && <AddTask onAdd = {addTask} />}
        {tasks.length > 0 ?(
        <Tasks tasks = {tasks} 
        onDelete={deleteTask}
        onToggle = {toggleReminder} />
        ) : (
          "No Tasks To Show"
        )}
          </>}
      />
      <Route path = "/about" element = {<About />}/>
      </Routes>
      <Footer />
      
    </div></Router>
    
  );
}

/*Classes
class App extends React.Component {
  render() {//Takes care of output
    return <h1>Hello from class</h1>
  }
}
*/
export default App;
/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/
