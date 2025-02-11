import React, {
    useContext
} from 'react';
import { DashboardContext } from './DashboardProvider';
import UserDetails from './components/UserDetails';
import UserContacts from './components/UserContacts';

const LoadingDashboard = () => {
    return (
        <h1>Loading...</h1>
    )
}

const DashboardService = () => {
    const { currentUser } = useContext(DashboardContext)

    if (!currentUser.id) return <LoadingDashboard />

    return (
        <div>
            <div className='phonebook-label bg-blue-400'>
                <h1>Phonebook</h1>
            </div>
            <UserDetails />
            <UserContacts />
        </div>
    )
}

export default DashboardService