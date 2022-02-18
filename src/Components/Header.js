import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom"

//what parameters the Header suports
const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

return (//how the Header looks and what is in it
    <header className = "header">
        <h1>{title}</h1>
        {location.pathname === "/" && 
        <Button color = {showAdd ? "red" : "green"}
        text = {showAdd ? "Close" : "Add"} 
        onClick= {onAdd}
        />}
    </header>
)
}
//default properties of Hheader
Header.defaultProps = {
    title: "Task Tracker",
}
//property types of Header
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
/*
const headingStyle = {
    color: "red", 
    backgroundColor: "black",
}*/
  export default Header