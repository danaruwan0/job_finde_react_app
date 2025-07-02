import React, { useRef, useEffect } from 'react';

export default function BubbleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let bubbles = [];

    for (let i = 0; i < 50; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 8 + 2,
        dx: Math.random() * 1 - 0.5,
        dy: Math.random() * -1.5 - 0.5,
        alpha: Math.random() * 0.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 216, 230, ${b.alpha})`; // light blue
        ctx.fill();
        ctx.closePath();

        b.x += b.dx;
        b.y += b.dy;

        if (b.y + b.r < 0) {
          b.y = canvas.height + b.r;
          b.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        // zIndex: -1,
         zIndex: 100,
        // background: '#001f3f'
      }}
    />
  );
}
