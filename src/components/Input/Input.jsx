import React from 'react';
import './input.css';

export default function Input({ className, id, onChange, placeholder, type }) {
    return (
        <div>
            <input
                type={type}
                className={className}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
