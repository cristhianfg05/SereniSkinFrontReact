import React from 'react';
import { Button, TextField, Box } from '@mui/material';

const Login = () => {
    return (
        <Box p={3}>
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>Login</Button>
        </Box>
    );
}

export default Login;
