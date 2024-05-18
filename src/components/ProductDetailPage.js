import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard'; // Importar el componente ProductDetailCard

const ProductDetailPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/main');
    };

    // Supongamos que estos son los detalles del producto obtenidos de algún lugar (base de datos, API, etc.)
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
                    {/* Usar la tarjeta para mostrar los detalles del producto */}
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
