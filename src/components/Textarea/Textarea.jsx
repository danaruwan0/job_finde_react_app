import React from 'react';
import './textarea.css';

export default function Textarea({ name,className, id, rows, cols, placeholder, onChange, value, required }) {
  return (
    <div>
      <textarea
        className={className}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
        name={name}
      />
    </div>
  );
}
