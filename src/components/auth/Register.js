import React from 'react';
import { Button, TextField, Box } from '@mui/material';

const Register = () => {
    return (
        <Box p={3}>
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>Register</Button>
        </Box>
    );
}

export default Register;
