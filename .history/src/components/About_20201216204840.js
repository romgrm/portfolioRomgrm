import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default function About() {
    
    const child = { width:300, height:100}
    
    return (
        <body>
            <h1 className=" text-center text-6xl">ABOUT</h1>
<HorizontalScroll>
        <div style={{child}} className="bg-red"/>
</HorizontalScroll>
        </body>
    )
}
