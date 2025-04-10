import axios from 'axios';
import { User } from '../types';

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>('http://localhost:9000/api/Users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Add a new user
export const addUser = async (newUser: User): Promise<User> => {
    try {
        const response = await axios.post<User>('http://localhost:9000/api/Users', newUser);
        if (response.status !== 200 && response.status !== 201) {
            throw new Error('Failed to add user');
        }
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error; 
    }
};

// Log in a user
export const LogIn = async (email: string, password: string): Promise<User> => {
    try {
        const response = await axios.post<User>('http://localhost:9000/api/Users/login', { email, password });
        if (response.status !== 200) {
            throw new Error('Failed to log in');
        }
        return response.data; // Devuelve los datos del usuario
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const UPdate = async (name: string, email: string, age:number, id:string): Promise<User> => {
    try {
        const data = {
            name: name,
            email: email,
            age: age
        }
        const response = await axios.put<User>('http://localhost:9000/api/users/'+id, data);
        if (response.status !== 200) {
            throw new Error('Failed to update in');
        }
        return response.data; // Devuelve los datos del usuario
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};
/* 
//PODEM FERHO COM UNA PROMESA
export const addUser = async (newUser: User): Promise<User> => {
    try {
        const response = await axios.post('http://localhost:9000/api/Users', newUser);
        if (response.status !== 200 && response.status !== 201) {
            throw new Error('Failed to add user');
        }
        return response.data
    } catch (error) {
        console.error('Error adding user:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};
*/

/*
// EXEMPLE SI HAGUESSIM DE MAPEJAR VALORS DIFERENTS AMB ELS QUE ENS RETORNA LA API
export const mapFromApiToUsers = (apiResponse: UsersResponseFromApi): User[] => {
    return apiResponse.map(userFromApi => {
        const {
            nombre: name,
            edad: age,
            correo: email
        } = userFromApi;
        return {
            name,
            age,
            email
        };
    });
};
*/