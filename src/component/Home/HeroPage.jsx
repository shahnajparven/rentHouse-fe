// /* eslint-disable react/jsx-key */
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Avatar, Badge } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// // import AccountCircle from "@mui/icons-material/AccountCircle";
// import "./HeroPage.css";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CloseIcon from "@mui/icons-material/Close";
// import { Link, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// const drawerWidth = 240;

// const HeroPage = (props) => {

//   const dispatch = useDispatch();
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   const [loggedinIcon, setLoggedinIcon] = React.useState(true);

//   React.useEffect(() => {
//     if (isLoggedIn) {
//       setLoggedinIcon(false);
//     } else {
//       setLoggedinIcon(true);
//     }
//   }, [dispatch, isLoggedIn]);

//   ////modal
//   const [state, setState] = React.useState({ right: false });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };
//   ///modal

//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const navItems = [
//     <Box>
//       <Link className="navItem" to="/">
//         <Typography fontSize={14}>Home</Typography>
//       </Link>
//     </Box>,
//     <Box>
//       <Link className="navItem" to="/useroption">
//         <Typography fontSize={14}> About</Typography>
//       </Link>
//     </Box>,
//     <Box >
//       <Link className="navItem" to="#">
//         <Box>

//           <PopupState variant="popover" popupId="demo-popup-menu">
//       {(popupState) => (
//         <React.Fragment>
//           {/* <Button variant="contained" {...bindTrigger(popupState)}>
//             Dashboard
//           </Button> */}
//           <Box display={'flex'} {...bindTrigger(popupState)}>
//             <Typography fontSize={14} lineHeight={2}>
//               Products
//             </Typography>
//             <ArrowDropDownIcon />
//           </Box>
//           <Menu {...bindMenu(popupState)}>
//             <MenuItem onClick={popupState.close}>Make-Up</MenuItem>
//             <MenuItem onClick={popupState.close}>Hair Care</MenuItem>
//             <MenuItem onClick={popupState.close}>Skin Care</MenuItem>
//             <MenuItem onClick={popupState.close}>Body Care</MenuItem>
//           </Menu>
//         </React.Fragment>
//       )}
//     </PopupState>
//         </Box>
//       </Link>
//     </Box>,
//     <Box>
//       <Link className="navItem" to="contact">
//         Contact
//       </Link>
//     </Box>,
//   ];
//   ////////////////////////////////////////////// for Mobile start
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2, color: "white" }}>
//         beautyBASKET
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
//   ////////////////////////////////////////////// for Mobile end
//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box>
//       <CssBaseline />

//       {/******************************************** nav start********************************************* */}
//       <AppBar className="appbar" component="nav">
//         <Toolbar className="tolbar">
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             beautyBASKET
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: "#fff" }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//           {/* *************** **********************************************/}

//           {/* *************** **********************************************/}
//           <Box
//             className="icons"
//             sx={{
//               display: { xs: "flex", sm: "flex" },
//               justifyContent: { xs: "end", sm: "end" },
//               width: { xs: "100%", lg: "15%", sm: "30%" },
//               marginLeft: "8%",
//             }}
//           >
//             <Box className="navIcon">
//               <IconButton
//                 size="small"
//                 aria-label="show 17 cart item"
//                 color="inherit"
//               >
//                 <Badge badgeContent={5} color="error">
//                   <ShoppingCartIcon />
//                 </Badge>
//               </IconButton>
//               {/* <p>Cart</p> */}
//             </Box>
//             <Box className="navIcon">
//               <IconButton
//                 size="small"
//                 aria-label="show 17 new notifications"
//                 color="inherit"
//               >
//                 <Badge badgeContent={17} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               {/* <p>Notifications</p> */}
//             </Box>

//             {/*****************************strat login icon with modal************************ */}

//             <Box className="navIcon">
//               {loggedinIcon ? (
//                 <Box>
//                   {["right"].map((anchor) => (
//                     <React.Fragment key={anchor}>
//                       {/* <IconButton
//                         onClick={toggleDrawer(anchor, true)}
//                         size="small"
//                         color="inherit"
//                       >
//                         <AccountCircle />
//                       </IconButton> */}
//                       <Box
//                         sx={{ cursor: "pointer" }}
//                         onClick={toggleDrawer(anchor, true)}
//                       >
//                         <Avatar sx={{ width: 30, height: 30 }} />
//                       </Box>
//                       {/* <p>account</p> */}
//                       <Drawer
//                         anchor={anchor}
//                         open={state[anchor]}
//                         onClose={toggleDrawer(anchor, false)}
//                       >
//                         <Box
//                           width={{ lg: 500, md: 500, xs: 400 }}
//                           py={2}
//                           px={5}
//                         >
//                           <IconButton onClick={toggleDrawer(anchor, false)}>
//                             <CloseIcon />
//                           </IconButton>
//                           <Box mt={1}>
//                             <Divider />
//                           </Box>

//                           <Box>
//                             {/* <Login
//                               props={toggleDrawer()}
//                               anchor={anchor}
//                               state={state}
//                               setState={setState}
//                             /> */}
//                             Login
//                           </Box>
//                         </Box>
//                       </Drawer>
//                     </React.Fragment>
//                   ))}
//                 </Box>
//               ) : (
//                 <Box className="navIcon">
//                   <IconButton
//                     size="small"
//                     aria-label="show 17 new notifications"
//                     color="inherit"
//                   >
//                     {" "}
//                   </IconButton>
//                   {/* <p>Notifications</p> */}
//                 </Box>
//               )}
//             </Box>

//             {/*****************************end login icon with modal************************ */}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {/********************************* for Mobile start**************************** */}
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               backgroundColor: "#2D2727",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       {/********************************* for Mobile end**************************** */}
//       <Box component="main">
//         <Toolbar />
//         {/* this is where children pages will show */}
//         <Outlet />
//       </Box>
//       {/* <Box zIndex={5} position="fixed" bottom={0} width={"100%"}>
//         <Footer />
//       </Box> */}
//     </Box>
//   );
// };

// export default HeroPage;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import { Divider } from "@mui/material";
import "./HeroPage.css";

const pages = [
  <Box>
    <Link className="navlink-mobile" to="/">
      Home
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Category">
      Category
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Products">
      Products
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Productttt">
      Guesthouse
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Pickup">
      Pick-up
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="search">
      search
    </Link>
  </Box>,
];
const settings = [
  <Box>
    <Link className="navlink" to="/">
      Home
    </Link>
  </Box>,
  <Box>
    <Link className="navlink" to="Category">
      Category
    </Link>
  </Box>,
  <Box>
    <Link className="navlink" to="Products">
      Products
    </Link>
  </Box>,
  <Box>
    <Link className="navlink" to="Productttt">
      Guesthouse
    </Link>
  </Box>,
  <Box>
    <Link className="navlink" to="Pickup">
      Pick-up
    </Link>
  </Box>,
  <Box>
    <Link className="navlink" to="search">
      search
    </Link>
  </Box>,
];

function HeroPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box className="navarea">
      <Box
        className="firstNavArea"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        color="white"
      >
        <Box display={"flex"} gap={2} color="white">
          <IconButton size="small">
            <LocationOnIcon
              sx={{
                mx: 1,
                color: red[500],
              }}
            />
            <Box color="white" fontSize={14}>
              Uttara Sector 11,Dhaka
            </Box>
          </IconButton>

          <IconButton size="small">
            <CallIcon
              sx={{
                color: red[500],
                mx: 1,
              }}
            />
            <Box color="white" fontSize={14}>
              {" "}
              +880 1745001556
            </Box>
          </IconButton>
          <IconButton size="small">
            <EmailIcon
              sx={{
                color: red[500],
                mx: 1,
              }}
            />
            <Box color="white" fontSize={14}>
              shahnajparven21@gmail.com
            </Box>
          </IconButton>
        </Box>
        <Box display={"flex"} justifyContent={"right"} gap={2}>
          <IconButton sx={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>

          <IconButton sx={{ color: "white" }}>
            <FacebookOutlinedIcon />
          </IconButton>

          <IconButton sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ background: "gray" }} />
      <AppBar position="static" className="appbar">
        <Container maxWidth="xl">
          <Toolbar className="tolbar">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                variant="span"
                fontWeight={"bold"}
                fontSize={30}
                mx={1}
                className="logo_name"
                color={red[500]}
              >
                rentHouse
              </Box>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Box textAlign="center">{page}</Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                variant="span"
                fontWeight={"bold"}
                fontSize={30}
                mx={1}
                className="logo_name"
                color={red[500]}
              >
                rentHouse
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

             {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Box textAlign="center">{setting}</Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>  */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default HeroPage;
