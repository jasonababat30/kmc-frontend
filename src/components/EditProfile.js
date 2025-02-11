import React, {
    useState,
    useEffect,
    useCallback
} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import blankProfilePicture from '../img/blank-profile-picture.png'

const EditProfileLoading = () => {
    return (
        <h1>Loading...</h1>
    )
}

const EditProfile = () => {
    // Use Navigate
    const navigate = useNavigate();

    // Use States
    const [currentUserDetails, setCurrentUserDetails] = useState({});
    const [currentUserProfilePhoto, setCurrentUserProfilePhoto] = useState(blankProfilePicture);

    // Use Callback
    const editCurrentUserProfile = useCallback(async (e) => {
        e.preventDefault();
        try {
            const result = await axios.patch(
                `http://localhost:4000/users/${currentUserDetails.id}`,
                {
                    ...currentUserDetails
                }
            );

            alert("Successfully Updated Profile");
            navigate('/dashboard')
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message ?? error.message ?? 'Something Went Wrong')
        }
    }, [
        JSON.stringify(currentUserDetails)
    ])

    // UseEffect
    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            navigate("/")
            return;
        }

        const getCurrentUserDetails = async () => {
            try {
                const currentUser = await axios.get(
                    "http://localhost:4000/users/current-user",
                    {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    }
                );

                const currentUserDetails = currentUser.data.data;
                const {
                    _id: id,
                    __v,
                    password,
                    contacts,
                    role,
                    ...rest_of_data
                } = currentUserDetails;

                setCurrentUserDetails({
                    id,
                    ...rest_of_data
                });
                setCurrentUserProfilePhoto(rest_of_data.profilePhoto || blankProfilePicture)
            } catch (error) {
                console.error(error)
                alert(error.response?.data?.message ?? error.message ?? "Something Went Wrong");
            }
        };

        getCurrentUserDetails();
    }, [
        sessionStorage.getItem('token')
    ])

    if (!currentUserDetails.id) {
        return (
            <EditProfileLoading />
        )
    }

    return (
        <div className="edit-profile bg-yellow-200">
            <h1> Edit Profile </h1>
            <form onSubmit={editCurrentUserProfile}>
                <div>
                    <div className="edit-profile-photo h-15 w-20">
                        <img
                            src={currentUserProfilePhoto}
                        />
                    </div>
                    <label>Profile Photo: </label>
                    <input
                        type='text'
                        value={currentUserDetails.profilePhoto}
                        onChange={(e) => {
                            setCurrentUserDetails(prev => ({
                                ...prev,
                                profilePhoto: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>First Name: </label>
                    <input
                        type='text'
                        value={currentUserDetails.firstName}
                        onChange={(e) => {
                            setCurrentUserDetails(prev => ({
                                ...prev,
                                firstName: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type='text'
                        value={currentUserDetails.lastName}
                        onChange={(e) => {
                            setCurrentUserDetails(prev => ({
                                ...prev,
                                lastName: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>Contact Number: </label>
                    <input
                        type='text'
                        value={currentUserDetails.contactNumber}
                        onChange={(e) => {
                            setCurrentUserDetails(prev => ({
                                ...prev,
                                contactNumber: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type='email'
                        value={currentUserDetails.emailAddress}
                        onChange={(e) => {
                            setCurrentUserDetails(prev => ({
                                ...prev,
                                emailAddress: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <button className='edit-profile-button bg-green-200 p-4' type='submit'>Enter</button>
                </div>
            </form>
            <div>
                <button
                    className='edit-profile-button bg-red-200 p-2'
                    onClick={() => {
                        navigate('/dashboard')
                    }}
                >
                    Back
                </button>
            </div>
        </div>
    )
}

export default EditProfile