import React from 'react'
import { motion } from "framer-motion";

export default function Work() {

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
    return (
        <motion.div>
            <h1 className=" text-center text-6xl" id="work">WORK</h1>
        </motion.div>
    )
}
