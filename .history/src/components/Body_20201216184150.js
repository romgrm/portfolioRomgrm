import React from 'react'
import content from '../content/index'
export default function Body() {
    return (
        <div 
        className="min-h-screen flex items-center justify-center"
        style={{
            background: '#000'
        }}>
            <div className="text-white">
                {/* <img src={content.header.img}></img> */}
                <h3>{content.header.text[0]}<br/>
                    {content.header.text[1]}<br/>
                    {content.header.text[2]}
                </h3>
            </div>
            
        </div>
    )
}
