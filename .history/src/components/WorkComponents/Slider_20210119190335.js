import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "../../styles/Slider.css";
import "../../styles/SliderHoz.scss"

const projects = [
    "/Project1.jpg",
    "/Project2.jpg",
    "Project3.jpg",
    "/Project1.jpg",
    "/Project2.jpg",
    "Project3.jpg",
    "/Project1.jpg",
    "/Project2.jpg",
    "Project3.jpg",
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

            <div class="horizontal-scroll-wrapper squares">
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
                <div>item 6</div>
                <div>item 7</div>
                <div>item 8</div>
            </div>
        </div>
    )
}
