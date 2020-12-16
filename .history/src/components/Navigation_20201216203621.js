import React from 'react'
import content from '../content/index'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export default function Navigation() {
    return (
        <div style={{
            background: '#000'
        }}>
            <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white">
                <Link to="/">
                    <h1 className="text-2xl">{content.nav.logo} </h1>
                </Link>
                <div className="flex" style={{ listStyle: 'none' }}>
                    <ScrollLink to="work" smooth={true}>
                        npm install --save react-scroll-horizontal<Link className="mr-5" to="work">
                            <button>
                                
                                {content.nav.links[0]}
                                </button>
                        </Link>
                    </ScrollLink>
                    <Link className="mr-5" to="/about">
                        {content.nav.links[1]}
                    </Link>
                    <Link className="mr-5" to="/contact">
                        {content.nav.links[2]}
                    </Link>
                </div>
            </div>
        </div>
    )
}