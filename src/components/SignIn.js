import React, {
    useState,
    useCallback,
    useEffect
} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    // Use States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Use Navigate
    const navigate = useNavigate();

    // UseCallback

    const handleSignIn = useCallback(async (e) => {
        e.preventDefault()

        try {
            const result = await axios.post(
                'http://localhost:4000/users/sign-in',
                {
                    emailAddress: email,
                    password
                },
            );

            sessionStorage.setItem('token', result.data.token)

            alert("Successfully Signed In!");

            navigate("/dashboard")
        } catch (error) {
            alert(error.response.data.message ?? "Something went wrong")
            setEmail("")
            setPassword("")
        }
    }, [
        email,
        password
    ])

    // Use Effect
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            navigate("/dashboard")
        }
    }, [
        sessionStorage.getItem('token')
    ])


    return (
        <div className="sign-in-page bg-blue-300">
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className='email-input'>
                    <label>Email</label>
                    <input
                        type='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                    />
                </div>
                <div className='password-input'>
                    <label>Password</label>
                    <input
                        type='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                    />
                </div>
                <button type="submit" className='sign-in-button bg-blue-600'>Enter</button>
            </form>
        </div>
    )
}

export default SignIn