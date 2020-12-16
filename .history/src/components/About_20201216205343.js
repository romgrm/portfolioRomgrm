import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default function About() {
    
    const child   = { width: `30em`, height: `100%` ,background: 'red'}
    const parent  = { width: `60em`, height: `100%`}
    
    return (
        <div style={parent} className="bg-red-500">
            <p>HELLO</p>
        <HorizontalScroll>
            <div style={child} className="bg-blue-500"/>
            <div style={child} />
            <div style={child} />
        </HorizontalScroll>
      </div>
    )
}
