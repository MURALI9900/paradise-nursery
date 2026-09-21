import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2>Total Plants: {totalItems}</h2>
              <h2>Total Cost: ${totalAmount.toFixed(2)}</h2>
            </div>

            {cartItems.map(item => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Plant Total: ${(item.price * item.quantity).toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, amount: -1 }))
                      }
                    >
                      -
                    </button>
                    <span>Quantity: {item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, amount: 1 }))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}

            <div className="cart-actions">
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/plants" className="continue-button">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;