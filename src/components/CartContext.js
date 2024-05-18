import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (product) => {
        setCartProducts(currentProducts => [...currentProducts, product]);
    };

    const removeFromCart = (productId) => {
        setCartProducts(currentProducts => currentProducts.filter(product => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};