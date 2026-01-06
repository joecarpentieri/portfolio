import { useEffect, useState } from "react"

/* star has id, size, x, y, opacity, animationDuration */


export const StarBackground = () => { /* renders stars and meteors */
    const [stars, setStars] = useState([])

    useEffect(() => {
      generateStars();
    }, []);

    const generateStars = () => { /* adds more stars based on size of window */
      const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

      const newStars = []

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id:i,
          size: Math.random() * 3 + 1, /* generates stars between 1 and 4 pixels */
          x: Math.random() * 100, /* x position random in window */
          y: Math.random() * 100, /* y position random in window */
          opacity: Math.random() * 0.5 + 0.5, /* random opacity between 0 and 1 - some stars bright and some not */
          animationDuration: Math.random() * 4 + 2, /* animation duration between 4 and 6 seconds */
        })
      }

      setStars(newStars);
    }
  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">{stars.map((star) => (
    <div key={star.id} className="star animate-pulse-subtle" style={{
      width: star.size + "px",
      height: star.size + "px",
      left: star.x + "%",
      top: star.y + "%",
      opacity: star.opacity,
      animationDuration: star.animationDuration,
    }}/>
  ))}</div>
}