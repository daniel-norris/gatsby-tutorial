import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import { navLinks, siteShortTitle } from '../config'

const headerVariants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    display: {
        opacity: 1,
        y: 0,
    },
}

const Header = () => {
    const { menu } = navLinks

    return (
        <motion.header
            className="flex items-center justify-between py-2 px-1 sm:py-6 sm:px-12 border-t-4 border-red-500"
            variants={headerVariants}
            initial="hidden"
            animate="display"
        >
            <Link to="/" aria-label="home">
                <h1 className="text-3xl font-bold">
                    {siteShortTitle}
                    <span className="text-red-500">.</span>
                </h1>
            </Link>
            <nav className="flex items-center">
                {menu.map(({ name, url }, key) => {
                    return (
                        <Link
                            className="text-lg font-bold px-3 py-2 rounded hover:bg-red-100 "
                            key={key}
                            to={url}
                        >
                            {name}
                        </Link>
                    )
                })}
            </nav>
        </motion.header>
    )
}

export default Header
