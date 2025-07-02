import React from 'react'
import './video.css'


export default function Video({src,
  id,className,
  poster,
  controls = true, autoPlay = false, loop = false, muted = false,}) {
  return (
    <div>

      <video
        src={src}
        id={id}
        className={className}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
      />
    </div>
  )
}
