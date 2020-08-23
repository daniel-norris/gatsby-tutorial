import React from 'react'
import Icon from '../components/icons/index'
import { Link } from 'gatsby'

import { socialMedia, siteShortTitle } from '../config/index'

const Footer = () => {
    return (
        <footer className="flex items-center justify-between bg-red-500 py-6 px-12">
            <Link to="/" aria-label="home">
                <h1 className="text-3xl font-bold text-white">
                    {siteShortTitle}
                </h1>
            </Link>
            <div className="flex">
                {socialMedia.map(({ name, url }, key) => {
                    return (
                        <a
                            className="ml-8 w-6 h-6"
                            href={url}
                            key={key}
                            alt={`${name} icon`}
                        >
                            <Icon name={name} color="white" />
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer
