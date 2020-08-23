import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <div
            className="px-4 mx-auto container mt-6 min-h-full grid"
            style={{
                gridTemplateRows: 'auto 1fr auto',
            }}
        >
            <Header />
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
