import React from 'react'
import './icon.css'

export default function Icon({src, alt, className,id}) {
    return (
        <div>
            <img
                src={src}
                alt={alt}
                className={className}
                id={id} />
        </div>
    )
}
