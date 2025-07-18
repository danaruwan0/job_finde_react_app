import React from 'react';
import './button.css';

export default function Button({ text, id, className, type = "button", onClick }) {
  return (
    <button
      id={id}
      // className={`btn ${className}`}
      className={className}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
