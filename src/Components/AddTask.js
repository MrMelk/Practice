import React from 'react'
import { useState } from "react"

//adding task
const AddTask = ({ onAdd }) => {
    //What our text boxes/check box supports and implements (maybe wrong wording)
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    //What happens when you press Save Task
    const onSubmit = (e) => {
        e.preventDefault()
        //If no text, alert
        if(!text) {
            alert("Please add a Task")
            return
        }
        //adds the text, day and reminder
        onAdd({ text, day, reminder })

        //resets the boxes
        setText("")
        setDay("")
        setReminder(false)
    }

  return (
      //CSS class, what they contain, and when they change
    <form className = "add-from" onSubmit = {onSubmit}>
        <div className = "form-control">
            <label>Task</label>
            <input type = "text" placeholder = "Add Task"
            value = {text} onChange = {(e) => setText(e.target.value)}/>
        </div>
        <div className = "form-control">
            <label>Day & Time</label>
            <input type = "text" placeholder = "Add Day & Time"
            value = {day} onChange = {(e) => setDay(e.target.value)}/>
        </div>
        <div className = "form-control form-control-check">
            <label>Set reminder</label>
            <input type = "Checkbox" checked ={reminder } 
            value = {reminder} 
            onChange = {(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type = "submit" value = "Save Task"//button to save task
        className = "btn btn-block" />
        
    </form>
  )
}

export default AddTask