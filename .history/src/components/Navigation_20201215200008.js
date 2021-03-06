import React from 'react'
import content from '../content/index'

export default function Navigation() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1>{content.nav.logo} </h1>
                <div className="flex ">
                    {content.nav.links.map(item => {
                        return <h2>{item.text}</h2>
                    })}
                </div>
            </div>
        </div>
    )
}
