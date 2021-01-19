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
export default  function Slider() {

    const [style, set] = useSpring(() => ({
             transform: "perspective(500px) rotateY(0deg)"
    }));

    const clamp = (value, clampAt = 30) => {
        if(value > 0){
            return value > clampAt ? clampAt : value;
        }else{
            return value < -clampAt ? -clampAt : value;
        }
    }

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${
                event.scrolling ? event.delta[0] : 0
            }deg)`
        })
    })
    return (
        <div className="container" {...bind()}>
            {projects.map(items => (
                <animated.div
                    key={items}
                    className="card"
                    style={{...style, backgroundImage: `url(${items})`}}
                />
            ))}
        </div>
    )
}
