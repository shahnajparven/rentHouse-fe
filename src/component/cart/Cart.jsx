import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // const increaseQuantity = (id, quantity, stock) => {
  //   const newQty = quantity + 1;
  //   if (stock <= quantity) {
  //     return;
  //   }
  //   dispatch(addItemsToCart(id, newQty));
  // };

  // const decreaseQuantity = (id, quantity) => {
  //   const newQty = quantity - 1;
  //   if (1 >= quantity) {
  //     return;
  //   }
  //   dispatch(addItemsToCart(id, newQty));
  // };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <Box pt={18} className="cartPage">
            <Box className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </Box>

            {cartItems &&
              cartItems.map((item) => (
                <Box className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  {/* <Box className="cartInput">
                    <Box
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    ></Box>

                    <input type="number" value={item.quantity} readOnly />
                    <Box
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    ></Box>
                  </Box> */}
                  <p className="cartSubtotal">{`৳${
                    item.price * item.stock
                  }`}</p>
                </Box>
              ))}

            <Box className="cartGrossProfit">
              <div></div>
              <Box className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`৳${cartItems.reduce(
                  (acc, item) => acc + item.price,
                  0
                )}`}</p>
              </Box>
              <div></div>
              <Box className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </Box>
            </Box>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
