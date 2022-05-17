import './Input.scss'
import React from 'react';

export default function Input({ label, name, type }) {
    return (
            <div className='field'>
                <label className='field__label'>{label}</label>
                <input placeholder={label} type={type} id={name} className="field__input" /> 
            </div>
    );
}

