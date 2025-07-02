import React from 'react';
import './text.css';

export default function Text({ className, id, text }) {
    return (
        <div>
            <p
                className={className}
                id={id}>
                {text}
            </p>
        </div>
    );
}
