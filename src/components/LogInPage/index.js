import { useState } from "react"
import Cookies from "js-cookie"
import "./index.css"

const LogInPage = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [logIn, logInFailureMessage] = useState(false)

    const submitTheForm = async (event) => {
        event.preventDefault()
        const userDetails = {username,password}
        const url = "https://claw-backend-project.onrender.com/login"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails),

        }
        const response = await fetch(url,options)
        if (response.ok === true) {
            const data = await response.json()
            Cookies.set('jwt_token', data.jwtToken, {expires: 30, path: '/'})
        }
        else {
            logInFailureMessage(true)
        }
    }

    return (
        <>
        <div className="sign-up-page">
            <div className="image-container-for-login"></div>
        <div className = "details-container">
                <form className = "form-container-log-in" onSubmit={submitTheForm}>
                    <h1 className = "register-heading">Log In</h1>
                    <div className = "alignment-container">
                        <label className = "label-styling" htmlFor = "username" >Username</label>
                        <input type = "text" className = "input-field-box" id = "username" placeholder = "Enter your Name" onChange = {(event) => setUsername(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "password">Password</label>
                        <input type = "password" className = "input-field-box" id = "password" placeholder = "Enter your password" onChange = {(event) => setPassword(event.target.value)}/>
                        <button type = "submit" className="log-in-button">Log In</button>
                    </div>
                </form>
            </div>
    </div>
        </>
    )
}

export default LogInPage