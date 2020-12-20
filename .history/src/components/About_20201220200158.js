import React from 'react'


export default function About() {
    
    const pageVariants = {
        initial: {
          opacity: 0,
          x: "-100vw",
          scale: 0.8
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1
        },
        out: {
          opacity: 0,
          x: "100vw",
          scale: 1.2
        }
      };
      
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      };
      
      const pageStyle = {
        position: "absolute"
      };
    return(
        <div>
            <h1>ABOUT</h1>
        </div>
    )
}
