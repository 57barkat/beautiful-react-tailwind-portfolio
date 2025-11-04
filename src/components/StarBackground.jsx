import { useEffect, useState } from "react";

export const DynamicBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    setIsDarkMode(document.documentElement.classList.contains("dark"));
    generateStars();
    generateMeteors();
    generateBubbles();

    return () => observer.disconnect();
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 4 + 2,
      }))
    );
  };

  const generateMeteors = () => {
    setMeteors(
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        duration: Math.random() * 3 + 3,
      }))
    );
  };

  const generateBubbles = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    setBubbles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 25 + 15,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.2,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        hue: Math.random() * 360,
      }))
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDarkMode ? (
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-pulse-subtle"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor animate-meteor"
              style={{
                width: `${meteor.size * 50}px`,
                height: `${meteor.size * 2}px`,
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                animationDelay: `${meteor.delay}s`,
                animationDuration: `${meteor.duration}s`,
              }}
            />
          ))}
        </>
      ) : (
        bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble animate-float"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              opacity: bubble.opacity,
              background: `radial-gradient(circle at 30% 30%, hsla(${bubble.hue}, 80%, 70%, 0.5), transparent)`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))
      )}
    </div>
  );
};
