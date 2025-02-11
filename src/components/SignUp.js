import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    // Use Navigate
    const navigate = useNavigate();

    // Use State
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    // Use Callback

    const handleSignUp = useCallback(async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) throw new Error("Password does not match")

            const result = await axios.post(
                "http://localhost:4000/users",
                {
                    firstName,
                    lastName,
                    emailAddress,
                    contactNumber,
                    password,
                    role
                }
            );

            alert("Succesfully Signed Up!")

            navigate("/sign-in")
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message ?? error.message ?? "Something Went Wrong")
        }
    }, [
        firstName,
        lastName,
        emailAddress,
        contactNumber,
        password,
        confirmPassword,
        role
    ])

    // Use Effect
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            navigate('/dashboard')
        }
    }, [
        sessionStorage.getItem('token')
    ])

    return (
        <div className='sign-up bg-green-300'>
            <h1>SignUp</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>First Name: </label>
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label>Contact Number: </label>
                    <input
                        type='text'
                        value={contactNumber}
                        onChange={(e) => {
                            setContactNumber(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type='email'
                        value={emailAddress}
                        onChange={(e) => {
                            setEmailAddress(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label>Sign Up as: </label>
                    <div>
                        <label>Admin</label>
                        <input
                            type='radio'
                            name='role'
                            value='super_admin'
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>User</label>
                        <input
                            type='radio'
                            name='role'
                            value='user'
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="sign-up-button bg-green-500 p-5">Enter</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp