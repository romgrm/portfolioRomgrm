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
                <img src={content.header.img}>
                </img>
                
            </div>
            
        </div>
    )
}
