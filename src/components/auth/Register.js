import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../useUsers'; // Asegúrate que la ruta de importación es correcta

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password_hash: '', // Asumiendo que quieres recibir el password y hashearlo en el backend
        full_name: '',
        address: '',
        phone: ''
    });
    const { registerUser } = useUsers();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await registerUser(formData);
            // Si el registro es exitoso, redirigir al login con un mensaje
            navigate('/login', { state: { message: 'Registro correcto. Por favor, inicie sesión.' } });
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password_hash" value={formData.password_hash} onChange={handleChange} />
            </label>
            <label>
                Full Name:
                <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
            </label>
            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
