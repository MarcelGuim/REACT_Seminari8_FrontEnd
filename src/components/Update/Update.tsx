import React, { useState } from 'react';
import styles from './Update.module.css';

interface User {
    _id: string;
    name: string;
    age: number;
    email: string;
}

interface UpdateProps {
    user: User;
    onUpdate: (updatedUser: User) => void;
}

const Update: React.FC<UpdateProps> = ({ user, onUpdate }) => {
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age.toString());
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate inputs
        if (!name || !age || !email) {
            alert('Please fill in all fields.');
            return;
        }

        const ageNumber = parseInt(age);
        if (isNaN(ageNumber) || ageNumber <= 0) {
            alert('Please enter a valid age.');
            return;
        }

        const updatedUser: User = {
            _id: user._id,
            name,
            age: ageNumber,
            email,
        };

        onUpdate(updatedUser);
    };

    return (
        <div className={styles.updateContainer}>
            <h1>Update User Information</h1>
            <form onSubmit={handleSubmit} className={styles.updateForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Update User
                </button>
            </form>
        </div>
    );
};

export default Update;
