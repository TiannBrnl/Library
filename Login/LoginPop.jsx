import React, { useState } from 'react';
import './login.css';
import close from '../../assets/close.png';
const LoginPop = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Log In");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currState === "Log In") {
            
            console.log("Logging in...");
        } else {

            console.log("Signing up...");
        }
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={close} alt="Close" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Log In" ? <></> : <input type='text' placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By Continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Log In"
                    ? <p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already Have an Account <span onClick={() => setCurrState("Log In")}>Login Here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPop;    