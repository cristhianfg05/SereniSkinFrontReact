import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard'; 

const ProductDetailPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/main');
    };

    // Aqui deberiamos obtener los productos de la API
    const productDetails = {
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        available: true,
    };

    return (
        <Box 
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Container maxWidth="sm">
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Detalles del Producto
                    </Typography>
                    <ProductDetailCard 
                        title={productDetails.title} 
                        description={productDetails.description} 
                        available={productDetails.available} 
                    />
                </Box>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleBack}
                    sx={{
                        padding: '0.75rem',
                        boxShadow: 2,
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: '#1565c0',
                        }
                    }}
                >
                    Volver
                </Button>
            </Container>
        </Box>
    );
};

export default ProductDetailPage;
