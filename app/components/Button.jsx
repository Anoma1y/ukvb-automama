import React from 'react';

export default (props) => {
    const {
        disabled = false,
        onClick,
        icon = false,
        fullWidth = false,
    } = props;

    return (
        <button
            type={'submit'}
            className={`material-button ${disabled ? 'material-button__disabled' : ''} ${fullWidth ? 'material-button__full-width' : ''} ${icon ? 'material-button__icon' : ''}`}
            disabled={disabled}
            onClick={onClick}
        >{props.children}</button>        
    )
}