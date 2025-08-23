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

    const contextValue = {
        food_list,
        cartItems, 
        setCartItems, 
        addToCart
    }
    
    // const getTotalCaartPrice = () => {
    //     let totalAmount = 0;
    //     for (const itemId in cartItems) {
    //         const item = food_list.find(food => food._id === itemId);
    //         if (item) {
    //             totalAmount += item.price * cartItems[itemId];
    //         }
    //     }
    //     return totalAmount;
    // }

    useEffect(() => {
        
    }, [cartItems]);
    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;