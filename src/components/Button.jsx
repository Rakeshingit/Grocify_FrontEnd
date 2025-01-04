import React from 'react';
import '../Global Stylesheets/Button.css'

const BestButton = ({label, variant, onClick, disabled, size, btnText, icon, type}) => {
    return (
        <button className={`${variant} button-basic ${size}`} type={type} onClick={onClick} disabled={disabled}>
            <div className="button-group">
                {icon && <p className="icon-of-button">{icon}</p>}
                {btnText && <p className="text-of-button">{btnText}</p>}
            </div>
        </button>
    )
}

export default BestButton;