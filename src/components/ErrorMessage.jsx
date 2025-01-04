import React, {useState} from 'react';
import '../Admin Page StylesSheets/ErrorMessage.css'; // custom styling here

const ErrorMessage = ({message, type = 'error', dismissible = false, onDismiss}) => {
    const [isVisible, setIsVisible] = useState(true);

    // Handle dismissal
    const handleDismiss = () => {
        setIsVisible(false);
        if (onDismiss) {
            onDismiss();
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`error-message ${type}`}>
            <span>{message}</span>
            {dismissible && (
                <button className="dismiss-btn" onClick={handleDismiss}>
                    &times;
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;
