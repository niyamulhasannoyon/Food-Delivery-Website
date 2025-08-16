import { createContext, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
    setCartItems(prev => ({
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
    }));
}

const removeFromCart = (itemId) => {
    setCartItems(prev => {
        if (!prev[itemId]) return prev; // nothing to remove
        const updated = { ...prev };
        if (updated[itemId] === 1) delete updated[itemId]; // remove item if count is 1
        else updated[itemId] -= 1;
        return updated;
    });
}

    const contextValue = {
        food_list, 
        cartItems, 
        setCartItems, 
        addToCart, 
        removeFromCart
    }

    useEffect(() => {
        
    }, [cartItems]);
    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;