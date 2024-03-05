import { Box } from "@mui/material";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <Box className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <Box>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ৳ ${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)} >Remove</p>
      </Box>
    </Box>
  );
};

export default CartItemCard;