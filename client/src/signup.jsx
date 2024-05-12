import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate , Link} from "react-router-dom";
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3011/register', { name, email, password })
            .then(result => {
                console.log(result);
                const { data }= result;
                localStorage.setItem('email', data.email);
                localStorage.setItem('name', data.name); 
                
                navigate('/home')
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form >
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit"  onClick={handleSubmit} className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already Have an account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
