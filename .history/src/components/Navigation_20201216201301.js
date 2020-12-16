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
                <div className="flex mr-3">
                    {content.nav.links.map((link, index) => {
                        return (
                            <Link key={index} className="nav-link mr-2">
                                {link.text[0]}
                                {link.text}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}