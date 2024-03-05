import Button from "react-bootstrap/Button";
import { Box } from "@mui/material";

const Footerform = () => {
  return (
    <form>
      <Box display={'flex'} gap={3}>
        <input type="email" placeholder="Enter email" className="form-input" />
        <Box>
          <Button className="footer-button">Subscrive</Button>
        </Box>
      </Box>
    </form>
  );
};
export default Footerform;
