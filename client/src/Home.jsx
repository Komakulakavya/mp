import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Home() {
    const [name, setName] = useState("");
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('email');
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        } else {
            fetch(`http://localhost:3011/users?email=${email}`)
                .then(response => response.json())
                .then(data => {
                    setName(data.name);
                    localStorage.setItem('name', data.name);
                })
                .catch(error => console.error('Error fetching user:', error));
        }
    }, [email]);

    const startNavigation = (path) => {
        navigate(path);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
                <h1 style={{ fontSize: '3rem', margin: '0', marginBottom: '10px' }}>Solve DSA</h1>
                <p style={{ fontSize: '1.5rem', margin: '0' }}>Start solving Data Structures and Algorithms problems</p>
            </header>
            <div style={{ padding: '40px' }}>
                <h4 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Welcome, {name || "User"}!</h4>
                <div style={{ width: '150px', height: '150px', margin: '0 auto', marginBottom: '40px' }}>
                    <CircularProgressbar value={progress} text={`${progress}%`} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {menuItems.map((item, index) => (
                        <div key={index} style={{ margin: '40px', backgroundColor: '#f0f0f0',marginLeft:'5px', width: '400px', padding: '40px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '3rem', marginBottom: '20px' }}>{item.title}</h3>
                            <button className='about' onClick={() => startNavigation(item.path)}>Start</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const menuItems = [
    { title: 'Arrays', path: '/array' },
    { title: 'Searching', path: '/searching' },
    { title: 'Sorting', path: '/sorting' },
    { title: 'Stacks and Queues', path: '/stackandqueues' },
    { title: 'LinkedList', path: '/linkedlist' },
    { title: 'Trees', path: '/trees' },
    { title: 'Graphs', path: '/graphs' },
];

export default Home;
