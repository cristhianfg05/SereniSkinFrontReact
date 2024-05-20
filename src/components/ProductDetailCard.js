import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

const defaultImage = 'https://via.placeholder.com/150';

const ProductDetailCard = ({ title, description, available, image, price, stock, categoryDescription }) => {
    return (
        <Card variant="outlined">
            <CardMedia
                component="img"
                width="100%"
                height="auto"
                image={image || defaultImage}
                alt={title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    Precio: ${price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2">
                        Stock:
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 1, color: stock > 0 ? 'green' : 'red' }}>
                        {stock > 0 ? 'Yes' : 'No'}
                    </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">
                    Categoría: {categoryDescription}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetailCard;
