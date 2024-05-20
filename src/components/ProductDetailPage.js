import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';

const ProductDetailPage = () => {
    const { productId } = useParams(); // Extrae el ID del producto de la URL
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`http://localhost:4000/products/${productId}`); // Coloca aquí la URL de tu API
            const data = await response.json();
            setProductDetails(data); // Actualiza el estado con los detalles del producto
        };

        fetchProductDetails();
    }, [productId]);

    const handleBack = () => {
        navigate('/main');
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
                    {productDetails ? (
                        <ProductDetailCard
                            title={productDetails.name}
                            description={productDetails.description}
                            available={productDetails.stock > 0}
                        />
                    ) : (
                        <Typography>Cargando...</Typography>
                    )}
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
