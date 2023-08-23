import PropTypes from 'prop-types';

function Button({ onClick, className, type = 'button', text, children }) {

    return (
        <button
            onClick={onClick}
            className={className}
            type={type}
        >
            {text}
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.object,
}

export default Button