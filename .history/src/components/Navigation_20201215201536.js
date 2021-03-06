import React from 'react'
import content from '../content/index'

export default function Navigation() {
    return (
        <div style={{
            background: 
        }}>
            <div className="flex items-center justify-between w-10/12 mx-auto py-3">
                <h1 className="text-2xl font-bold">{content.nav.logo} </h1>
                <div className="flex mr-3">
                    {content.nav.links.map(item => {
                        return <h2 className="mr-2">{item.text}</h2>
                    })}
                </div>
            </div>
        </div>
    )
}