import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import image10 from './assets/img10.svg'; // Import the image for the login page

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3011/login', { email, password })
            .then(result => {
                const { data: { email, name } } = result;
                localStorage.setItem('email', email);
                if (name) {
                    localStorage.setItem('name', name);
                }
                navigate('/home');
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', fontSize: '18px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontSize: '24px' }}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
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
                            <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
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
                        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', background: '#00B4FF', color: '#fff', cursor: 'pointer', transition: 'background 0.3s', fontSize: '18px' }}>
                            Login
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: '#00B4FF' }}>Sign Up</Link></p>
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <img src={image10} alt="Login Image" style={{ width: '450px', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default Login;
