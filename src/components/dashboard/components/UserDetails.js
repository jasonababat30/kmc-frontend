import React, { useContext } from 'react'
import { DashboardContext } from '../DashboardProvider';

import blankProfilePicture from '../../../img/blank-profile-picture.png'

const UserDetails = () => {
    const { currentUser } = useContext(DashboardContext);
    const {
        firstName,
        lastName,
        emailAddress,
        contactNumber,
        profilePhoto
    } = currentUser;

    console.log("CURRENT USER: ", currentUser)

    return (
        <div className="user-details bg-red-200">
            <div className='currentUser-profilephoto h-15 w-20'>
                <img
                    src={profilePhoto || blankProfilePicture}
                />
            </div>
            <div>
                <h1>Name: </h1>
                <h2>{`${firstName} ${lastName}`}</h2>
            </div>
            <div>
                <h1>Email: </h1>
                <h2>{emailAddress}</h2>
            </div>
            <div>
                <h1>Contact Number: </h1>
                <h2>{contactNumber}</h2>
            </div>
        </div>
    )
}

export default UserDetails