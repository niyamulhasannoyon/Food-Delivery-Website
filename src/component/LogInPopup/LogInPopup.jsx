    import React, { useState } from 'react';
    import './LogInPopup.css';

    const LogInPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login"); //Login Sign Up
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        setShowLogin(false); // close popup after login
    };

    return (
        <div className="login-popup">
        {/* backdrop */}
        <div className="login-popup-overlay" onClick={() => setShowLogin(false)}></div>

        {/* popup box */}
        <div className="login-popup-box">
            <button className="close-btn" onClick={() => setShowLogin(false)}> × </button>
            
            <h2>Welcome Back 👋</h2>
            <p>Please sign in to continue</p>

            <form onSubmit={handleSubmit}>
                {currState === "Login"? null: 
                    <>
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Niyamul Hasan"
                        required
                    />
                    </> }
            <label>Email</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="tometo@example.com"
                required
            />

            <label>Password</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
                required
            />
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <span>   I agree to the <span className="link" onClick={() => alert("Redirect to Terms and Conditions")}>Terms and Conditions</span></span>
            </div>

            <button type="submit" className="login-btn">{currState === "Sign Up"?"Create account":"Login"}</button>
            </form>
            
            {
                currState === "Login"
                ? <p className="register-text">
                Don’t have an account? <span onClick={() => setCurrState("Sign Up")} className="link">Create one</span>
                </p> 
                : <p className="register-text">
                Already have an account? <span onClick={() => setCurrState("Login")} className="link">Login</span>
                </p>
            }
        </div>
        </div>
    );
    };

    export default LogInPopup;
