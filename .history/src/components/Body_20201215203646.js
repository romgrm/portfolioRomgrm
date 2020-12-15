import React from 'react'
import content from '../'
export default function Body() {
    return (
        <div 
        className="min-h-screen flex items-center justify-center"
        style={{
            background: '#000'
        }}>
            <div>
                <LazyLoadImage src={content.}>
                    
                </LazyLoadImage>
            </div>
            <h1 className="text-white">Hello</h1>
            
        </div>
    )
}
