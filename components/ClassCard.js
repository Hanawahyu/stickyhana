// components/ClassCard.js
import React from 'react';
import ProfileCard from './ProfileCard';
import styles from './ClassCard.module.css';

const ClassCard = ({ className, friends }) => {
    return (
        <div className={`${styles.classCard} ${styles[className]}`}>
            <h2>{className}</h2>
            <div className={styles.profileContainer}>
                {friends.map((friend, index) => (
                    <ProfileCard key={index} imageUrl={friend.imageUrl} name={friend.name} />
                ))}
            </div>
        </div>
    );
};

export default ClassCard;