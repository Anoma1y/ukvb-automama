import React from 'react';

export default (props) => {
    const {
        disabled = false,
        onClick,
        fullWidth = false
    } = props;

    return (
        <button
            className={`material-button ${disabled ? 'material-button__disabled' : ''} ${fullWidth ? 'material-button__full-width' : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}