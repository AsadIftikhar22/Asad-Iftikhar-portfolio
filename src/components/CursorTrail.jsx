import { useEffect, useRef } from "react";

const COUNT = 6;

export default function CursorTrail() {
  const dots = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const points = Array.from({ length: COUNT }, () => ({ x: -40, y: -40 }));
    let mx = -40;
    let my = -40;
    let frame = 0;

    const tick = () => {
      points.forEach((point, index) => {
        const follow = index === 0 ? { x: mx, y: my } : points[index - 1];
        point.x += (follow.x - point.x) * (index === 0 ? 0.32 : 0.2);
        point.y += (follow.y - point.y) * (index === 0 ? 0.32 : 0.2);
        const el = dots.current[index];
        if (el) el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
      });
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="cursor-trail" aria-hidden="true">
      {Array.from({ length: COUNT }, (_, index) => (
        <span
          key={index}
          className={`cursor-dot n${index}`}
          ref={(node) => {
            dots.current[index] = node;
          }}
        />
      ))}
    </div>
  );
}
