import { useEffect } from "react";

export function useSceneMotion() {
  useEffect(() => {
    const root = document.documentElement;
    let mx = 0;
    let my = 0;
    let frame = 0;

    const paint = () => {
      frame = 0;
      root.style.setProperty("--mx", mx.toFixed(3));
      root.style.setProperty("--my", my.toFixed(3));
      root.style.setProperty("--sy", String(window.scrollY));
    };

    const queue = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onMove = (event) => {
      mx = (event.clientX / window.innerWidth - 0.5) * 2;
      my = (event.clientY / window.innerHeight - 0.5) * 2;
      queue();
    };

    const onScroll = () => queue();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    paint();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

export function useReveal(key) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [key]);
}
