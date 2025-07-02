import React from 'react'
import './image.css'


export default function Image({src,alt,id,className}) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        id={id}
        className={className}
      />

    </div>
  )
}
