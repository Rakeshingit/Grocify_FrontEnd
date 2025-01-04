import React, {useState} from 'react';
import '../Global Stylesheets/DialogBox.css';
import Input from './Input';
import BestButton from "./Button";
import {RxCross2} from "react-icons/rx";

const DialogBox = ({open = false, onClose, title, subTitle, btnText, inputs, onSubmit}) => {

    const [formData, setFormData] = useState(
        inputs.reduce((acc, input) => ({...acc, [input.name]: ""}), {})
    );

    if (!open) {
        return null;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        for (let key in formData) {
            if (!formData[key].trim()) {
                alert(`${key} is required`);
                return;
            }
        }
        onSubmit(formData);
    }

    const handleOverlayClick = (e) => {
        if (e.target.id === 'DialogBoxBG')
            onClose();
    }


    return (
        <div className="DialogBoxBG" id={"DialogBoxBG"} onClick={handleOverlayClick}>
            <div className={"DialogBox"}>
                <div className={"close-btn"}>
                    {
                        <BestButton
                            onClick={onClose}
                            icon={<RxCross2/>}
                        />}
                </div>
                <header>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </header>
                <form>
                    {
                        inputs.map((input) => (
                            <Input
                                type={input.type}
                                name={input.name}
                                label={input.placeholder}
                            />
                        ))
                    }
                    <div className={"boxButton"}>
                        {<BestButton
                            variant={"Primary"}
                            size={"large"}
                            btnText={btnText}
                        />}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DialogBox;