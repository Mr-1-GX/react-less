
import PropTypes from "prop-types"
import { useState } from 'react'

import ProfileChildComponent from './ProfileChildComponent'
import ProfileChildComponentSecond from './ProfileChildComponentSecond'

export const Profile = ({ title }) => {
    const [username, setUserName] = useState('')
    return (
        <div className="row p-2">
            <h3>{title}</h3>
            <hr />
            <h2> UserName: {username} </h2>
            <div className="row">
                <div className="col-4">
                    <input className="form-control" onChange={({ target }) => setUserName(target.value)} />
                </div>
                <div className="col-4">
                    <ProfileChildComponent />
                </div>
                <div className="col-4">
                    <ProfileChildComponentSecond />
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    title: PropTypes.string.isRequired
}