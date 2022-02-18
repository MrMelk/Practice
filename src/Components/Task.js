import React from 'react'
import { FaTimes } from "react-icons/fa"

//Our task object and what methods it supports
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className = {`task ${task.reminder ? "reminder" : ""}`}
    onDoubleClick ={() => onToggle(task.id)}>

        <h3>{task.text} <FaTimes style = {{ color:
            "red", cursor: "pointer"}} //set how the task looks
            onClick = {() => onDelete(task.id)}//allows to delete
            /></h3>
        <p>{task.day}</p>

    </div>
  )
}

export default Task