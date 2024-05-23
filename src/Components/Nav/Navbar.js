import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Items/Firebase';


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={props.openin}
        onClose={props.onClose}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 250,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #0099ff',
    borderRadius:"20px",
    boxShadow: 20,
    p: 4,
  };
  

export default function Navbar() {

    const navigate=useNavigate ();
    const handleLogout = async() => {
    try {
      await auth.signOut()
      navigate("/")
    } 
    catch (error) { 
        alert(error)  
    }
    }

    const [opened, setOpened] = React.useState(false);
    const handleOpen = () => setOpened(true);
    const handleClose = () => setOpened(false);


    const [anchorEle, setAnchorEle] = React.useState(null);

    const handleClicking = (event) => {
        setAnchorEle(event.currentTarget);
    };

    const handleClosed = () => {
        setAnchorEle(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Techbrain Networks
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" color="inherit" disableRipple
                            id="demo-customized-button"
                            aria-controls={anchorEle ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorEle)}
                            disableElevation
                            onClick={handleClicking}>
                            <AddIcon />
                        </IconButton>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEle}
                            openin={Boolean(anchorEle)}
                            onClose={handleClosed}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row" , width:"50rem"}}>
                                <List sx={{ justifyContent: "start",mx:3 }}>
                                    <ListItem>
                                        <IconButton sx={{ borderRadius: "0px" }}>
                                            <WidgetsIcon sx={{ mr: 2 }} />
                                            <ListItemText>General</ListItemText>
                                        </IconButton>
                                    </ListItem>
                                    <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: '0px' }}>
                                        <Box justifyContent={"start"} sx={{ ml: "1.5rem" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", padding: '0px' }} >
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Add user
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "start" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Items
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Inventory Adjustments
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Journal Entry
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Log Time
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Weekly Log
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                        </Box>
                                    </ListItem>
                                </List>{/* 1 */}


                                <List sx={{ justifyContent: "start",mx:3 }}>
                                    <ListItem >
                                        <IconButton sx={{ borderRadius: "0px" }}>
                                            <ShoppingCartCheckoutSharpIcon sx={{ mr: 2 }} />
                                            <ListItemText>Sales</ListItemText>
                                        </IconButton>
                                    </ListItem>
                                    <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: '0px' }}>
                                        <Box justifyContent={"start"} sx={{ ml: "1.5rem" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", padding: '0px' }} >
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Customer
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "start" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Estimates
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Delivery Challan
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Invoices
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Recurring Invoices
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Bills Of Supply
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Retainer Invoices
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Sales Order
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Customer Payment
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Credit Notes
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                        </Box>
                                    </ListItem>
                                </List>{/* 2 */}

                                <List sx={{ justifyContent: "start",mx:3 }}>
                                    <ListItem>
                                        <IconButton sx={{ borderRadius: "0px" }}>
                                            <ShoppingBasketIcon sx={{ mr: 2 }} />
                                            <ListItemText>Purchases</ListItemText>
                                        </IconButton>
                                    </ListItem>

                                    <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: '0px' }}>
                                        <Box justifyContent={"start"} sx={{ ml: "1.5rem" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", padding: '0px' }} >
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Vendors
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "start" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Expenses
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Recurring Expense
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Bills
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Recurring Bills
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Purchase Orders
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Vendor Payment
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Vendor Credits
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                        </Box>
                                    </ListItem>

                                </List>{/* 3 */}


                                <List sx={{ justifyContent: "start",mx:"1px" }}>
                                    <ListItem>
                                        <IconButton sx={{ borderRadius: "0px" }}>
                                            <AccountBalanceIcon sx={{ mr: 2 }} />
                                            <ListItemText>Banking</ListItemText>

                                        </IconButton>
                                    </ListItem>

                                    <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: '0px' }}>
                                        <Box justifyContent={"start"} sx={{ ml: "1.5rem" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", padding: '0px' }} >
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Bank Transfer
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "start" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Card Payment
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Owner Drawings
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                <AddIcon sx={{ fontSize: "1rem", mr: 1 }} />
                                                <ListItemText >
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        Other Income
                                                    </Typography>
                                                </ListItemText>
                                            </Box>

                                            

                                        </Box>
                                    </ListItem>
                                </List>{/* 4 */}
                            </Box>

                        </StyledMenu>

                        <IconButton size="large" color="inherit" disableRipple>
                            <SupervisorAccountIcon />
                        </IconButton>

                        <IconButton size="large" color="inherit" disableRipple>
                            <NotificationsIcon />
                        </IconButton>

                        <IconButton size="large" color="inherit" disableRipple>{/* ----------------- */}
                       
                            
                            
                             <LogoutIcon onClick={handleOpen}  sx={{textDecoration:"none",color:"white"}}/>
                            

                            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={opened}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={opened}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Do you want to Logout ?
            </Typography>
            <Button onClick={handleLogout} variant='contained'sx={{mt:2,mr:2}}>Yes</Button>
            <Button variant='contained' sx={{mt:2,mx:2}} onClick={handleClose}>No</Button>
          </Box>
        </Fade>
      </Modal>
                            
                            
                        </IconButton>

                        {/* <Button
                            id="demo-customized-button"
                            aria-controls={anchorEle ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorEle)}
                            disableElevation
                            color='inherit'
                            onClick={handleClicking}
                        >
                            <Avatar sx={{ width: 30, height: 30, mr: 1 }} src="/broken-image.jpg" />


                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEle}
                            openin={Boolean(anchorEle)}
                            onClose={handleClosed}
                        >
                            <List sx={{ width: '21.5rem' }} component="div" disablePadding>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar variant="rounded" sx={{ width: 50, height: 50, mr: 2 }}>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Hari Hara" />
                                </ListItem>
                                <Divider sx={{ my: 0.8 }} />
                                <ListItem>
                                    <PersonIcon sx={{ fontSize: '2rem', mr: 1.5 }} />
                                    <ListItemText primary="My Profile" secondary="Account settings and more " />
                                </ListItem>
                                <ListItem>
                                    <KeyIcon sx={{ fontSize: '2rem', mr: 1.5 }} />
                                    <ListItemText primary="Change Password" secondary="Password settings" />
                                </ListItem>
                                <ListItem>
                                    <PersonIcon sx={{ fontSize: '2rem', mr: 1.5 }} />
                                    <ListItemText primary="Account Details" />
                                </ListItem>
                                <ListItem>
                                    <DiamondOutlinedIcon sx={{ fontSize: '2rem', mr: 1.5 }} />
                                    <ListItemText primary="Subscription Plans" />
                                </ListItem>
                                <Divider sx={{ my: 0.8 }} />
                                <ListItem>
                                    <Button variant="contained" sx={{ textTransform: "none" }}>Log Out</Button>
                                </ListItem>
                            </List>
                        </StyledMenu> */}


                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}