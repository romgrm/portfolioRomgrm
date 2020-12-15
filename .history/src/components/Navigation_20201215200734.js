import React from 'react'
import content from '../content/index'

export default function Navigation() {
    return (
        <div className>
            <div className="flex items-center justify-between w-10/12 mx-auto py-3">
                <h1>{content.nav.logo} </h1>
                <div className="flex mr-3">
                    {content.nav.links.map((item,index) => {
                        return <h2>{item.text}</h2>
                    })}
                </div>
            </div>
        </div>
    )
}
