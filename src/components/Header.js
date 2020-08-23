import React from 'react'
import { Link } from 'gatsby'

import { navLinks, siteShortTitle } from '../config'

const Header = () => {
    const { menu } = navLinks

    return (
        <header className="flex items-center justify-between">
            <Link to="/" aria-label="home">
                <h1 className="text-3xl font-bold">{siteShortTitle}</h1>
            </Link>
            <nav className="flex items-center">
                {menu.map(({ name, url }, key) => {
                    return (
                        <Link
                            className="text-lg font-bold px-3 py-2 rounded hover:bg-gray-200 "
                            key={key}
                            to={url}
                        >
                            {name}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}

export default Header
