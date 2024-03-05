import { Box, IconButton } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Form = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={'center'} alignItems={'center'} gap={2} color="white">
      <IconButton size="small">
          <TwitterIcon
            sx={{
              color: 'gray',
              mx: 1,
            }}
          />
        </IconButton>
        <IconButton size="small">
          <YouTubeIcon
            sx={{
              mx: 1,
              color: 'gray',
            }}
          />
        </IconButton>

        <IconButton size="small">
          <PinterestIcon
            sx={{
              color: 'gray',
              mx: 1,
            }}
          />
        </IconButton>
        <IconButton size="small">
          <InstagramIcon
            sx={{
              color: 'gray',
              mx: 1,
            }}
          />
        </IconButton>
       
      </Box>
    </>
  );
};
export default Form;
