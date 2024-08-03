import "./index.css" 
import {useState} from "react"
import {Link} from "react-router-dom"

const SignUpPage = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [mobileNumber,setNumber] = useState("")
    const [country,setCountry] = useState("")
    const [city,setCity] = useState("")
    const [pinCode,setPinCode] = useState("") 
    const [role,setRole] = useState("")

    const submitTheDetails = async (event) => {
        event.preventDefault()
        const userDetails = {username,password,mobileNumber,country,city,pinCode,role}
        const options = {
            body: JSON.stringify(userDetails),
            method: 'POST',
        }
        const apiUrl = "https://claw-backend-project.onrender.com/Register"
        const responseData = await fetch(apiUrl,options)
        if (responseData.ok === true) {
            const data = responseData.json()
            console.log(data)
        }
    }

    return (
        <div className="sign-up-page">
            <div className="image-container"></div>
            <div className = "details-container">
                <form className = "form-container" onSubmit={submitTheDetails}>
                    <h1 className = "register-heading">Register</h1>
                    <div className = "alignment-container">
                        <label className = "label-styling" htmlFor = "username" >Username</label>
                        <input type = "text" className = "input-field-box" id = "username" placeholder = "Enter your Name" onChange = {(event) => setUsername(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "password">Password</label>
                        <input type = "password" className = "input-field-box" id = "password" placeholder = "Enter password" onChange = {(event) => setPassword(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "number">Mobile Number</label>
                        <input type = "text" className = "input-field-box" id = "number" placeholder = "Enter your phone number" onChange = {(event) => setNumber(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "country">Country</label>
                        <input type = "text" className = "input-field-box" id = "country" placeholder = "Enter your Country" onChange = {(event) => setCountry(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "city">City</label>
                        <input type = "text" className = "input-field-box" id = "city" placeholder = "Enter your City" onChange = {(event) => setCity(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "Pincode">Pincode</label>
                        <input type = "text" className = "input-field-box" id = "Pincode" placeholder = "Enter your Pincode" onChange = {(event) => setPinCode(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "Role">Role</label>
                        <input type = "text" className = "input-field-box" id = "Role" placeholder = "Enter your Role" onChange = {(event) => setRole(event.target.value)}/>
                        <button type = "submit" className="sign-in-button">Sign In</button>
                        <p className="have-an-account-para">Already have an account?<Link to = "/logIn" className="log-in-text"> Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default SignUpPage

