import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (product) => {
        setCartProducts(currentProducts => {
            const existingProductIndex = currentProducts.findIndex(p => p.id === product.id);
            if (existingProductIndex !== -1) {
                // Producto ya existe, actualizar la cantidad
                const newProducts = [...currentProducts];
                const currentProduct = newProducts[existingProductIndex];
                const updatedQuantity = currentProduct.quantity + product.quantity;
                newProducts[existingProductIndex] = {
                    ...currentProduct,
                    quantity: updatedQuantity > product.stock ? product.stock : updatedQuantity  // Asegúrate de no exceder el stock
                };
                return newProducts;
            } else {
                // Producto no existe, añadir nuevo
                return [...currentProducts, product];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartProducts(currentProducts => currentProducts.filter(product => product.id !== productId));
    };

    const clearCart = () => {
        setCartProducts([]);  // Vacía el carrito completamente
    };

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
