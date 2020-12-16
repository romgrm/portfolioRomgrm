import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default function About() {
    
    const child   = { width: `20em`, height: `100%`}
    const parent  = { width: `100em`, height: `50em`}
    
    return (
        <div style={parent} className="bg-red-500">
            <HorizontalScroll>
                
            </HorizontalScroll>
            <div style={child} className="bg-blue-500">HELLO</div>
            
       
      </div>
    )
}
