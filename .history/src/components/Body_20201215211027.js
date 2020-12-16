import React from 'react'
import content from '../content/index'
export default function Body() {
    return (
        <div 
        className="min-h-screen flex items-center justify-center"
        style={{
            background: '#000'
        }}>
            <div>
                <img filter src={content.header.img}>
                    
                </img>
            </div>
            <h1 className="text-white">Hello</h1>
            
        </div>
    )
}
