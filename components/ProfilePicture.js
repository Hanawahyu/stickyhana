// components/ProfilePicture.js
import React from 'react';
import styles from './ProfilePicture.module.css';

const ProfilePicture = () => {
    return (
        <div className={styles.container}>
            <img 
                src="/profile.jpg" // Ganti dengan path foto profil Anda
                alt="Profile"
                className={styles.profilePicture}
            />
        </div>
    );
};

export default ProfilePicture;