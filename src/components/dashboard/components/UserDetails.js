import React, { useContext } from 'react'
import { DashboardContext } from '../DashboardProvider';
import { useNavigate } from 'react-router-dom';

import blankProfilePicture from '../../../img/blank-profile-picture.png'

const UserDetails = () => {
    // Use Navigate
    const navigate = useNavigate();

    // Use Context
    const { currentUser } = useContext(DashboardContext);
    const {
        firstName,
        lastName,
        emailAddress,
        contactNumber,
        profilePhoto
    } = currentUser;

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
            <div>
                <button className='edit-profile-button bg-yellow-200' onClick={() => {
                    navigate('/edit-profile')
                }}>Edit Profile</button>
            </div>
        </div>
    )
}

export default UserDetails