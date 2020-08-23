import React from 'react'
import PropTypes from 'prop-types'

const External = ({ color }) => {
    return (
        <svg viewBox="0 0 20 20" fill={color} id="link" className="w-8 h-8">
            <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

External.propTypes = {
    color: PropTypes.string,
}

External.defaultProps = {
    color: '#000000',
}

export default External
