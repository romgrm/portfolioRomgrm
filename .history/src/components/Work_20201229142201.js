import React from 'react'
import { motion } from "framer-motion";

export default function Work() {

    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw",
            scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "-100vw",
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
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            <h1 className=" text-center text-6xl" id="work">WORK</h1>
            <p className-">
            Magna culpa occaecat mollit ea ipsum sunt consectetur velit est minim. Esse dolor eu irure deserunt voluptate occaecat 
            fugiat sint non ut sint mollit excepteur dolor. Culpa aliquip id mollit occaecat duis voluptate dolore dolore sint irure 
            pariatur aute. Reprehenderit et dolor adipisicing commodo ullamco.
            </p>
        </motion.div>
    )
}
