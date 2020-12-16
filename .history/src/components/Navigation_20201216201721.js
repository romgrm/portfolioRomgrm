import React from 'react'
import content from '../content/index'
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <div style={{
            background: '#000'
        }}>
            <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white">
                <h1 className="text-2xl">{content.nav.logo} </h1>
                <div className="flex">
                    <li style>
                        
                    {content.nav.links[0]}
                    </li>
                    {content.nav.links[1]}
                    {content.nav.links[2]}
                </div>
            </div>
        </div>
    )
}