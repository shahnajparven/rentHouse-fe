
import { red } from "@mui/material/colors";
import "./Footer.css";
import Footerform from "./Footerform.jsx";
import Footericon from "./Footericon.jsx";
import { Box } from "@mui/material";
import CopyRight from "./CopyRight.jsx";

const Footer = () => {
  return (
    <Box width={"100%"} backgroundColor="#272829" className="footer">
      <Box className="footer-container">
        <Box
        py={5}
        px={10}
          display={"flex"}
          justifyContent={"space-between"}
          gap={3}
          flexDirection={{ lg: "row", sm: "row", xs: "column" }}
        >
          <Box>
            <h3>Stay in Touch</h3>
            <hr />
            <p>Receive the latest news,special offers and exclusives.</p>
            <Footerform />
          </Box>
          <Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
            <Footericon />
          </Box>
        </Box>

       <Box>
        <CopyRight/>
       </Box>
      </Box>
    </Box>
  );
};
export default Footer;
