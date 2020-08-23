import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
    return (
        <div
            className="px-4 mx-auto container mt-6 min-h-full grid"
            style={{
                gridTemplateRows: 'auto 1fr auto',
            }}
        >
            <header>My Portfolio</header>
            <div className="mx-auto">
                <main>{children}</main>
            </div>
            <footer>Footer</footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout
