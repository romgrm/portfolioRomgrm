import React from 'react'
import content from '../content/index'
import Typical from 'react-typical'
export default function Body() {
    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                background: '#000'
            }}>
            <div>
                <img src={content.header.img}></img>
            </div>
            <div className="text-white">
                <h3>{content.header.text[0]}<br />
                    {content.header.text[1]}<br />
                </h3>
                <h3>
                    <Typical
                        steps=[{content.header.typical[0]}, 1000, 'Hello world!', 500}]
                        loop={Infinity}
                        wrapper="p"
                    />
                    {content.header.text[2]}
                </h3>
            </div>

        </div>
    )
}
