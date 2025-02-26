// pages/index.js
import React from 'react';
import ClassCard from '../components/ClassCard';

const friendsData = {
    SI: [
        { name: 'Alice', imageUrl: '/1.jpg' }, // Menggunakan gambar dari folder public
        { name: 'Bob', imageUrl: '/2.jpg' },
        { name: 'Charlie', imageUrl: '/3.jpg' },
        { name: 'David', imageUrl: '/4.jpg' },
        { name: 'Eve', imageUrl: '/5.jpg' },
    ],
    KA: [
        { name: 'Frank', imageUrl: '/1.jpg' },
        { name: 'Grace', imageUrl: '/2.jpg' },
        { name: 'Heidi', imageUrl: '/3.jpg' },
        { name: 'Ivan', imageUrl: '/4.jpg' },
        { name: 'Judy', imageUrl: '/5.jpg' },
    ],
    BD: [
        { name: 'Mallory', imageUrl: '/1.jpg' },
        { name: 'Niaj', imageUrl: '/2.jpg' },
        { name: 'Olivia', imageUrl: '/3.jpg' },
        { name: 'Peggy', imageUrl: '/4.jpg' },
        { name: 'Trent', imageUrl: '/5.jpg' },
    ],
};

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Teman-Teman Terbaik</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {Object.keys(friendsData).map((className) => (
                    <ClassCard key={className} className={className} friends={friendsData[className]} />
                ))}
            </div>
        </div>
    );
};

export default Home;