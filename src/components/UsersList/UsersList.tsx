import React, { useState } from "react";
import { User } from '../../types';
import styles from './UsersList.module.css';
import Update from '../Update/Update';

interface Props {
    users: User[];
    onUserUpdated: (user: User) => void;
}

const UsersList: React.FC<Props> = ({ users, onUserUpdated }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleUpdateComplete = (updatedUser: User) => {
        setSelectedUser(null);
        onUserUpdated(updatedUser);
    };

    const renderList = (): React.ReactNode[] => {
        return users.map((user) => (
            <li 
                key={user._id}
                className={styles.listItem}
                onClick={() => setSelectedUser(user)}
            >
                <div className={styles.userInfo}>
                    <h2 className={styles.user}>{user.name}</h2>
                    <h3 className={styles.age}>Age: {user.age}</h3>
                    {user.email && <p className={styles.email}>{user.email}</p>}
                    <p className={styles._id}>ID: {user._id}</p>
                </div>
            </li>
        ));
    };

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {renderList()}
            </ul>
            
            {selectedUser && (
                <div className={styles.updateModal}>
                    <Update 
                        user={selectedUser} 
                        onUpdate={handleUpdateComplete} 
                    />
                </div>
            )}
        </div>
    );
};

export default UsersList;
