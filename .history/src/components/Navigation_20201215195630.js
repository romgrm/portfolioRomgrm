import React from 'react'
import content from '../content/index'

export default function Navigation() {
    return (
        <div>
            <h1>{content.nav.logo} </h1>
            <div>
                {content.nav.links.map(item => {
                    
                })}
            </div>
        </div>
    )
}
