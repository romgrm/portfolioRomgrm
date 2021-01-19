import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "../../styles/Slider.css"; 

const projects = [
    "/Project1.jpg",
    "/Project2.jpg",
    "Project3.jpg"
]
export default function Slider() {
    return (
        <div className="container">
            {projects.map(items => (
                <div
                key={items}
                className="card"
                style={{ backgroundImage: `url(${items})` }}
                />
            ))}
        </div>
    )
}
