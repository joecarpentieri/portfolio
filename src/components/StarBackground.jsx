import { useEffect, useState } from "react"

/* star has id, size, x, y, opacity, animationDuration */
/* meteor has id, size, x, y, delay, animationDuration */



export const StarBackground = () => { /* renders stars and meteors */
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
      generateStars();
      generateMeteors();

      const handleResize = () => {
        generateStars();
      };

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener("resize", handleResize)
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
    };

    const generateMeteors = () => { /* adds more stars based on size of window */
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id:i,
        size: Math.random() * 2 + 1, /* generates stars between 1 and 3 pixels */
        x: Math.random() * 100, /* x position random in 100% of window */
        y: Math.random() * 20, /* y position random in 20% of window */
        delay: -Math.random() * 15, 
        animationDuration: Math.random() * 3 + 3, /* animation duration between 3 and 3 seconds */
      })
    }

    setMeteors(newMeteors);
  };


  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {stars.map((star) => (
    <div key={star.id} className="star animate-pulse-subtle" style={{
      width: star.size + "px",
      height: star.size + "px",
      left: star.x + "%",
      top: star.y + "%",
      opacity: star.opacity,
      animationDuration: star.animationDuration,
    }}/>
  ))}
    {meteors.map((meteor) => (
      <div key={meteor.id} className="meteor animate-meteor" style={{
        width: meteor.size * 50 + "px",
        height: meteor.size * 2 + "px",
        left: meteor.x + "%",
        top: meteor.y + "%",
        animationDelay: meteor.delay + "s",
        animationDuration: meteor.animationDuration + "s",
      }}/>
    ))}
  
  </div>
}