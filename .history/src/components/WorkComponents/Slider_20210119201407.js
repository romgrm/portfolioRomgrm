import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "../../styles/Slider.css";

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

    const style = useSpring({
        from: {
             transform: "rotateY(0deg)"
        },
        // transform: "rotateY(0deg)"
    });
    return (
        <div className="horizontal-scroll-wrapper squares">
            {projects.map(items => (
                <animated.div
                    key={items}
                    className="div"
                    style={{...style, backgroundImage: `url(${items})`}}
                />
            ))}
            {/* <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div> */}

            {/* <div class="horizontal-scroll-wrapper squares">
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
                <div>item 6</div>
                <div>item 7</div>
                <div>item 8</div>
            </div> */}
        </div>
    )
}
