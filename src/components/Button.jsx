import PropTypes from "prop-types";

const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
}

export default Button;