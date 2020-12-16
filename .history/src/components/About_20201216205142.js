import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default function About() {
    
    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}
    
    return (
        <div style={parent} className="">
            <p>HELLO</p>
        <HorizontalScroll>
            <div style={child} />
            <div style={child} />
            <div style={child} />
        </HorizontalScroll>
      </div>
    )
}
