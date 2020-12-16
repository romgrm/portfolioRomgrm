import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default function About() {
    
    const child   = { width: `60em`, height: `100%`}
    const parent  = { width: `600em`, height: `50em`}
    
    return (
        <div style={parent} className="bg-red-500">
            <HorizontalScroll>

            <div style={child} className="bg-blue-500">HELLO</div>
            </HorizontalScroll>
            
       
      </div>
    )
}
