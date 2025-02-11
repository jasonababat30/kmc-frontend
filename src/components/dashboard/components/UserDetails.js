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
                <h2 className='font-bold'>{`${firstName} ${lastName}`}</h2>
            </div>
            <div>
                <h2 className='italic'>{emailAddress}</h2>
            </div>
            <div>
                <h2>{contactNumber}</h2>
            </div>
        </div>
    )
}

export default UserDetails