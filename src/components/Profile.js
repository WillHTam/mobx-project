import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    label: PropTypes.string
}

// this here Stateless Function Component with them Destructured arguments
const Profile = ({ onClick, label, selected }) => {
    // If selected, highlight
    const classes = selected ? 'bold' : ''
    return (
        <li onClick={onClick} className={classes}>
            {label}
        </li>
    )
}

Profile.propTypes = propTypes
export default Profile
