import React from 'react';
import '../Global Stylesheets/Input.css';

const Input = ({label, type, name, id}) => {
    return (
        <div className={'input-component'}>
            <label htmlFor={name}>{label}</label>
            <input className="focus:ring-0 focus:outline-none focus:border-none" id={id} type={type} name={name}/>
        </div>
    )
}


export default Input;