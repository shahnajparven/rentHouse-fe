import { Box } from "@mui/material";

function CopyRight() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      borderTop={1}
      borderColor="gray"
      px={8}
      py={2}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box variant="span" fontSize={12} color="white">
        © <a href="#1">Shahnaj {currentYear}</a>. All Rights Reserved.
      </Box>
    </Box>
  );
}

export default CopyRight;
