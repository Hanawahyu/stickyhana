// components/ProfileCard.js
import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ imageUrl, name }) => {
    return (
        <div className={styles.profileCard}>
            <img src={imageUrl} alt={name} className={styles.profileImage} />
            <p>{name}</p>
        </div>
    );
};

export default ProfileCard;