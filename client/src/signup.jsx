import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import image8 from './assets/image8.svg';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3011/register', { name, email, password });
            const { data } = result;
            localStorage.setItem('email', data.email);
            localStorage.setItem('name', data.name);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', fontSize: '18px', maxWidth: '700px',width:'350px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontSize: '24px' }}>Register</h2>
                    <form>
                        <div style={{ marginBottom: '15px' }}>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', borderBottom: '1px solid #ccc', marginBottom: '10px', boxSizing: 'border-box', fontSize: '18px' }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', borderBottom: '1px solid #ccc', marginBottom: '10px', boxSizing: 'border-box', fontSize: '18px' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', borderBottom: '1px solid #ccc', marginBottom: '20px', boxSizing: 'border-box', fontSize: '18px' }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', background: '#00B4FF', color: '#fff', cursor: 'pointer', transition: 'background 0.3s', fontSize: '18px' }}>
                            Register
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: '#00B4FF' }}>Login</Link></p>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <img src={image8} alt="Signup Image" style={{ width: '480px', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default Signup;

