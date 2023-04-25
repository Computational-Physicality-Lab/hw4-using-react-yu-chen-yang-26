import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";
import { useEffect, useState } from "react";
import defaultImage from "../../assets/shirt_images/not-found.png";

const ShoppingCart = ({ cart, setCart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();
  const clickRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  useEffect(() => {
    var total = 0;
    var number = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      total = total + parseFloat(element.price.replace("$", ""));
      number = number + parseInt(element.quantity);
    }
    setSubtotal(total);
    setNumber(number);
  }, [cart]);
  return (
    <div className="cart">
      <div className="cart-header">
        {cart.length === 0 ? "Your Cart is Empty" : "My Cart " + number}
      </div>
      <div className="cart-body">
        <div className="cart-content">
          {cart.map((item) => (
            <div className="cart-details" key={item.id}>
              <div className="cart-shirt-name">{item.name}</div>
              <div className="cart-shirt">
                <img
                  className="cart-shirt-pic"
                  alt=""
                  src={item.src}
                  onError={(e) => (e.target.src = defaultImage)}
                />
                <div className="cart-shirt-info">
                  <div className="cart-shirt-info-item">
                    <div className="cart-shirt-rowname">Quantity: </div>
                    <div className="cart-shirt-text">{item.quantity}</div>
                  </div>
                  <div className="cart-shirt-info-item">
                    <div className="cart-shirt-rowname">Color: </div>
                    <div className="cart-shirt-text">{item.color}</div>
                  </div>
                  <div className="cart-shirt-info-item">
                    <div className="cart-shirt-rowname">Size: </div>
                    <div className="cart-shirt-text">{item.size}</div>
                  </div>
                  <div className="cart-shirt-info-item">
                    <div className="cart-shirt-rowname">Price: </div>
                    <div className="cart-shirt-text">{item.price}</div>
                  </div>
                  <button
                    className="remove"
                    onClick={() => clickRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-info">
          <div className="cart-order">
            <div className="cart-order-header">Order Summary</div>
            <div className="cart-order-item">
              <div className="cart-order-rowname">Subtotal: </div>
              <div className="cart-order-text">${subtotal.toFixed(2)}</div>
            </div>
            <div className="cart-order-item">
              <div className="cart-order-rowname">Est. Shipping: </div>
              <div className="cart-order-text">$6.95</div>
            </div>
            <div className="cart-order-item">
              <div className="cart-order-rowname">Total: </div>
              <div className="cart-order-text">
                ${(subtotal + 6.95).toFixed(2)}
              </div>
            </div>
            {cart.length === 0 ? (
              <button
                className="checkout"
                style={{ opacity: "40%", pointerEvents: "none" }}
              >
                Sign in and Checkout
              </button>
            ) : (
              <button
                className="checkout"
                onClick={() => navigate("/not_implemented")}
              >
                Sign in and Checkout
              </button>
            )}
          </div>
          <button className="continue" onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
