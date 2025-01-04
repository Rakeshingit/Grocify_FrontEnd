import React from 'react';
import '../Global Stylesheets/DialogBox.css';
import '../Global Stylesheets/AlertDialog.css';
import BestButton from "./Button";

const AlertDialog = ({isOpen, onClose, title, subTitle, response}) => {

    if (!isOpen)
        return null;

    return (
        <div className={"DialogBoxBG"}>
            <div className={"AlertDialog"}>
                <header>
                    <h1>{title}</h1>
                    <p>{subTitle ? subTitle : ''}</p>
                </header>
                <div className={"Buttons"}>
                    <BestButton
                        variant={"Outlined"}
                        size={"large"}
                        btnText={"Cancel"}
                        onClick={() => response(false)}
                    />
                    <BestButton
                        variant={"Primary"}
                        size={"large"}
                        btnText={"Continue"}
                        onClick={() => response(true)}
                    />
                </div>
            </div>
        </div>
    )
}

export default AlertDialog;