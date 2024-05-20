import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';
import { useCart } from './CartContext'; // Asegúrate de que la importación sea correcta según tu estructura de archivos

const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(null);
    const { addToCart } = useCart(); // Usar el hook useCart para acceder a la función addToCart

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`http://localhost:4000/products/${productId}`);
            const data = await response.json();
            setProductDetails(data);
        };

        fetchProductDetails();
    }, [productId]);

    const handleBack = () => {
        navigate('/main');
    };

    const handleAddToCart = () => {
        if (productDetails) {
            addToCart(productDetails); // Llama a addToCart con los detalles del producto
        }
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
                        <>
                            <ProductDetailCard
                                title={productDetails.name}
                                description={productDetails.description}
                                available={productDetails.stock > 0}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleAddToCart}
                                sx={{ mt: 2 }}
                            >
                                Añadir al Carrito
                            </Button>
                        </>
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
                        },
                        mt: 2
                    }}
                >
                    Volver
                </Button>
            </Container>
        </Box>
    );
};

export default ProductDetailPage;
