import React, {
    createContext,
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const DashboardContext = createContext(undefined);

const DashboardProvider = props => {
    // Props
    const { children } = props;

    // Use Navigate
    const navigate = useNavigate();

    // Use State
    const [currentUser, setCurrentUser] = useState({})

    // Use Effect
    useEffect(() => {
        const getCurrentUserDetails = async () => {
            try {
                const currentUserDetails = await axios.get(
                    "http://localhost:4000/users/current-user",
                    {
                        headers: {
                            authorization: `Bearer ${sessionStorage.getItem('token')}`
                        }
                    }
                );

                if (!currentUserDetails.data.data._id) throw new Error("User not found");

                const { _id: id, __v, ...rest_of_details } = currentUserDetails.data.data;

                setCurrentUser({
                    ...rest_of_details,
                    id
                });
            } catch (error) {
                console.error(error);
                alert(error.message)
                navigate("/")
            }
        }

        getCurrentUserDetails()
    }, []);
    return (
        <DashboardContext.Provider value={{ currentUser }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider