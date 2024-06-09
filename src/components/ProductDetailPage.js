import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, TextField, TextareaAutosize } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';
import { useCart } from './CartContext';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(null);
    const [categoryDetails, setCategoryDetails] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState('');
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`http://localhost:4000/products/${productId}`);
            const data = await response.json();
            setProductDetails(data);
            fetchCategoryDetails(data.category_id);
            fetchReviews(productId);
        };

        const fetchCategoryDetails = async (categoryId) => {
            const response = await fetch(`http://localhost:4000/categories/${categoryId}`);
            const data = await response.json();
            setCategoryDetails(data);
        };

        const fetchReviews = async (productId) => {
            const response = await fetch(`http://localhost:4000/reviews/product/${productId}`);
            const data = await response.json();
            setReviews(data);
        };

        fetchProductDetails();
    }, [productId]);

    const handleAddToCart = () => {
        if (productDetails && quantity > 0) {
            const productToAdd = {
                ...productDetails,
                quantity: parseInt(quantity)
            };
            addToCart(productToAdd);
        }
    };

    const handlePostComment = async () => {
        const userId = sessionStorage.getItem('userId'); // Asume que se guarda el ID del usuario en sessionStorage
        const reviewData = {
            product_id: productId,
            user_id: userId,
            rating: 6,  // Este valor podría ajustarse según una entrada de usuario para el rating
            comment: comment
        };

        try {
            const response = await fetch('http://localhost:4000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            });
            if (response.ok) {
                setComment('');

            } else {
                alert('No se pudo publicar el comentario.');
            }
        } catch (error) {
            console.error('Error al publicar comentario:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                {productDetails && categoryDetails ? (
                    <>
                        <ProductDetailCard
                            title={productDetails.name}
                            description={productDetails.description}
                            available={productDetails.stock > 0}
                            image={productDetails.image_url}
                            price={productDetails.price}
                            stock={productDetails.stock}
                            categoryDescription={categoryDetails.description}
                        />
                        {reviews.map((review) => (
                            <Typography key={review.id} variant="body2" sx={{ mt: 2 }}>
                                Comentario: {review.comment}
                            </Typography>
                        ))}
                        <TextareaAutosize
                            aria-label="Comentario"
                            minRows={3}
                            placeholder="Escribe un comentario..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            style={{ width: '100%', marginTop: '20px' }}
                        />
                        <Button variant="contained" color="primary" onClick={handlePostComment} sx={{ mt: 2 }}>
                            Publicar Comentario
                        </Button>
                    </>
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
