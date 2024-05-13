import { useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:4000/users');
        const data = await response.json();
        setUsers(data);
    };

    const registerUser = async (userData) => {
        try {
            const response = await fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const newUser = await response.json();
            setUsers(prevUsers => [...prevUsers, newUser]);
        } catch (error) {
            console.error('Failed to register user:', error);
        }
    };

    const authenticateUser = async (credentials) => {
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (response.ok) {
                return data;  // Retorna la data que podría incluir el usuario y el token JWT
            } else {
                throw new Error(data.message || 'Authentication failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            throw error;
        }
    };
    const updateUser = async (id, userData) => {
        try {
            const response = await fetch(`http://localhost:4000/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const updatedUser = await response.json();
            setUsers(prevUsers => prevUsers.map(user => user.id === id ? updatedUser : user));
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    };


    const deleteUser = async (id) => {
        try {
            await fetch(`http://localhost:4000/users/${id}`, {
                method: 'DELETE'
            });
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    return { users, fetchUsers, registerUser, updateUser, deleteUser };
};

export default useUsers;