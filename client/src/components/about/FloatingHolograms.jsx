// Step 6: Floating Holograms Background Layer
import { useEffect } from "react";

const FloatingHolograms = () => {
  useEffect(() => {
    const canvas = document.getElementById("hologram-canvas");
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const holograms = [];

    for (let i = 0; i < 30; i++) {
      holograms.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 30 + 10,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      holograms.forEach((holo) => {
        ctx.beginPath();
        ctx.arc(holo.x, holo.y, holo.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(26, 234, 249, 0.16)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();

        holo.x += holo.dx;
        holo.y += holo.dy;

        if (holo.x < 0 || holo.x > width) holo.dx *= -1;
        if (holo.y < 0 || holo.y > height) holo.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      id="hologram-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  );
};

export default FloatingHolograms;
