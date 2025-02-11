import React, { useContext } from 'react'
import { DashboardContext } from '../DashboardProvider';

import blankProfilePicture from '../../../img/blank-profile-picture.png'

const Contact = props => {
    const {
        id,
        firstName,
        lastName,
        profilePhoto
    } = props;
    return (
        <div>
            <div className="contact-profilephoto w-10 h-10">
                <img src={profilePhoto || blankProfilePicture} />
            </div>
            <div>
                <h1>{`${firstName} ${lastName}`}</h1>
            </div>
        </div>
    )
}

const UserContacts = () => {
    const { currentUser } = useContext(DashboardContext)
    const { contacts = [] } = currentUser;

    return (
        <div className='user-contacts bg-red-300'>
            <h1>Contacts:</h1>
            {
                !contacts.length ?
                    (
                        <h2>No Contacts...</h2>
                    ) :
                    (
                        contacts.map(contact => {
                            const {
                                _id: id,
                                firstName,
                                lastName,
                                profilePhoto
                            } = contact;

                            return (
                                <Contact
                                    id={id}
                                    firstName={firstName}
                                    lastName={lastName}
                                    profilePhoto={profilePhoto}
                                />
                            )
                        })
                    )
            }
        </div>
    )
}

export default UserContacts