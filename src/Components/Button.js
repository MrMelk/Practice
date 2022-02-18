import PropTypes from "prop-types"

//this is our add/close button has color, text, and the onClick method
const Button = ({ color, text, onClick }) => {
//sets colour text and onClick on input. Uses btn CSS class
  return (
    <button onClick = {onClick} style = {{backgroundColor: color}}
    className = "btn">{text}
    </button>
  )
}
//default color
Button.defaultProps = {
    color: "steelblue",
}
//property types
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button