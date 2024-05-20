import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';
import { useCart } from './CartContext';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(null);
    const [categoryDetails, setCategoryDetails] = useState(null);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`http://localhost:4000/products/${productId}`);
            const data = await response.json();
            setProductDetails(data);
            fetchCategoryDetails(data.category_id);
        };

        const fetchCategoryDetails = async (categoryId) => {
            const response = await fetch(`http://localhost:4000/categories/${categoryId}`);
            const data = await response.json();
            setCategoryDetails(data);
        };

        fetchProductDetails();
    }, [productId]);

    const handleAddToCart = () => {
        if (productDetails && quantity > 0) {
            const productToAdd = {
                ...productDetails,
                quantity: parseInt(quantity)  // Asegúrate de que esto es un número entero
            };
            addToCart(productToAdd);
            console.log(`Añadiendo ${quantity} unidades del producto ID ${productDetails.id} al carrito`);
        }
    };


    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                {productDetails && categoryDetails ? (
                    <ProductDetailCard
                        title={productDetails.name}
                        description={productDetails.description}
                        available={productDetails.stock > 0}
                        image={productDetails.image_url}
                        price={productDetails.price}
                        stock={productDetails.stock}
                        categoryDescription={categoryDetails.description}
                    />
                ) : (
                    <Typography>Cargando...</Typography>
                )}
                {productDetails && productDetails.stock > 0 && (
                    <>
                        <TextField
                            type="number"
                            InputProps={{ inputProps: { min: 1, max: productDetails.stock } }}
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, Math.min(parseInt(e.target.value, 10), productDetails.stock)))}
                            margin="normal"
                            sx={{ width: '100px' }}
                        />
                        <Button variant="contained" size="small" color="secondary" onClick={handleAddToCart}>
                            Añadir al Carrito
                        </Button>
                    </>
                )}
                <Button variant="contained" color="secondary" onClick={() => navigate('/main')}>
                    Volver
                </Button>
            </Box>
        </Container>
    );
};

export default ProductDetailPage;
