import './Input.scss'
import React from 'react';

export default function Input({ label, name, type }) {
    return (
            <label className='field__label'>
                {/* {label} */}
                <input placeholder={label} type={type} id={name} className="field__input" />
            </label>
    );
}

