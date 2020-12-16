import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default function About() {
    
    const child   = { width: `20em`, height: `100%`}
    const parent  = { width: `100em`, height: `300em`}
    
    return (
        <div style={parent} className="bg-red-500">
            <div style={child} className="bg-blue-500">HELLO</div>
            <div style={child} />
            <div style={child} />
       
      </div>
    )
}
