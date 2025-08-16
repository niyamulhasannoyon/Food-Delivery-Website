    import React, { useContext } from 'react';
    import './Cart.css';
    import { StoreContext } from '../../context/StoreContext';

    const Cart = () => {
    const { cartItems, food_list, addToCart, removeFromCart, setCartItems } = useContext(StoreContext);

    const totalPrice = food_list.reduce(
        (sum, item) => sum + (cartItems[item._id] || 0) * item.price,
        0
    );

    const removeProduct = (id) => {
        const updated = { ...cartItems };
        delete updated[id];
        setCartItems(updated);
    };

    return (
        <div className="cart" id="cart">
        <div className="cart-items">
            <div className="cart-items-title">
            <p>Food</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            </div>
            <hr />

            {food_list.map((item) => {
            const quantity = cartItems[item._id];
            if (!quantity) return null;

            return (
                <div key={item._id} className="cart-items-title cart-items-item">
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>

                {/* Quantity control */}
                <div className="quantity-control">
                    <button onClick={() => removeFromCart(item._id)}>-  </button>
                    <span>{quantity}</span>
                    <button onClick={() => addToCart(item._id)}>  +</button>
                </div>

                <p>${item.price * quantity}</p>

                {/* Remove product completely */}
                <p className="remove-button" onClick={() => removeProduct(item._id)}>x</p>
                </div>
            );
            })}

            {/* <div className="cart-total">
            Total: ${totalPrice}
            </div> */}
        </div>
        <div className="cart-bottom">
            <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{0}</p>
                </div> <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
                </div> <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>{0}</b>
                </div> <hr />
                <div className="cart-promoCode">
            <div>
                <p>If you have a promo code, Enter it here</p>
                <div className='cart-promoCode-input'>
                    <input type="text" placeholder="Enter promo code" />
                    <button>Apply</button>
                </div>
            </div>
        </div>
            <button className='proceed'>PROCEED TO CHECKOUT</button>
        </div>
            
        </div>
        </div>
    );
    };

    export default Cart;
