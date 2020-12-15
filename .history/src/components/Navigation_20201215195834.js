import React from 'react'
import content from '../content/index'

export default function Navigation() {
    return (
        <div>
            <div className="flex">
                <h1>{content.nav.logo} </h1>
                <div>
                    {content.nav.links.map(item => {
                        return <h2>{item.text}</h2>
                    })}
                </div>
            </div>
        </div>
    )
}
