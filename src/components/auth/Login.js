import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useUsers from '../useUsers'; // Asegúrate que la ruta de importación es correcta

const Login = () => {
    const [credentials, setCredentials] = useState({ identifier: '', password: '' });
    const [error, setError] = useState('');
    const { authenticateUser } = useUsers();
    const navigate = useNavigate();
    const location = useLocation();

    // Recuperar mensajes de otros componentes, como Register
    useEffect(() => {
        if (location.state?.message) {
            setError(location.state.message);
            navigate(location.pathname, { replace: true }); // Limpiar el estado para evitar que el mensaje persista en futuras visitas
        }
    }, [location, navigate]);

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await authenticateUser(credentials);
            console.log(data);  // Aquí manejarías el login, como guardar el token y redirigir al usuario
            navigate('/');  // Redirige a la página principal o dashboard después del login
        } catch (error) {
            setError('Login failed. Please check your credentials.');  // Manejar errores de autenticación
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <label>
                Email or Username:
                <input type="text" name="identifier" value={credentials.identifier} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
