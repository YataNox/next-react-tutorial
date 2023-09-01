import React, { useState, useRef, useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

function SignUp() {
    const { dispatch } = useContext(ModalContext)
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleInputChange = e => {
        const { name, value } = e.target
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Username Validation
        if (userData.username.length < 3) {
            alert('Username must be at least 3 characters long.')
            usernameRef.current.focus()
            return
        }

        // Email Validation
        const emailRegex = /\S+@\S+\.\S+/
        if (!emailRegex.test(userData.email)) {
            alert('Invalid email format!')
            emailRef.current.focus()
            return
        }

        // Password Validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passwordRegex.test(userData.password)) {
            alert(
                'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
            )
            passwordRef.current.focus()
            return
        }

        dispatch({ type: 'SHOW_MODAL' })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    ref={usernameRef}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleInputChange}
                />
                <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
