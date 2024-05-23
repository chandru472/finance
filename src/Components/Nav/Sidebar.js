import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import Paper from '@mui/material/Paper';

import Navbar from './Navbar';
import { Link } from 'react-router-dom';









const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

/* const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
})); */


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {



    const [open, setOpen] = React.useState(true);

    const [opened, setOpened] = React.useState(false);/* for item */

    const [items, setitems] = React.useState(false)/* fr sales */

    const [purchase, setpurchase] = React.useState(false)/* for purchase */

    const [time, settime] = React.useState(false)/* for Time Tracking*/

    const [acc, setacc] = React.useState(false)/* for Account*/

    const handleacc = () => {
        setacc(!acc)
        setitems(false)
        setpurchase(false)
        setOpened(false)
        settime(false)
    }

    const handletime = () =>/* Time */ {
        settime(!time);
        setitems(false)
        setpurchase(false)
        setOpened(false)
        setacc(false)
    }


    const handlepurchase = () =>/* fr sales */ {
        setpurchase(!purchase);
        setitems(false)
        settime(false)
        setOpened(false)
        setacc(false)
    }

    const handleitem = () => {/* for purchase */
        setitems(!items)
        setpurchase(false)
        settime(false)
        setOpened(false)
        setacc(false)
    }




    const handleClick = () => {/* for items */
        setOpened(!opened);
        setitems(false)
        setpurchase(false)
        settime(false)
        setacc(false)
    };

    const handleClicked = () => {/* for closing the list in button function */

        setOpened(false);
       
        setacc(false)
        setpurchase(false);
        settime(false);
        setitems(false);
       

    };




    const handleDrawerOpen = () => {
        setOpen(true);

    };





    return (
        <Box sx={{ display: 'flex', height: "-2px" }}>
            <CssBaseline />
            <Navbar />
            <Drawer variant="permanent" open={open}>


                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pt: "64px" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >

                    <Box onClick={handleDrawerOpen}>
                        <Link to="/home" style={{ textDecoration: 'none', color: "black" }}>
                            <ListItemButton sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Home */}

                                <HomeIcon sx={{ mr: 2 }} />

                                <ListItemText primary="Home" sx={{ ml: 2 }} />
                            </ListItemButton>
                        </Link>
                    </Box>


                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton onClick={handleClick} sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Items */}
                            <WorkIcon sx={{ mr: 2 }} />

                            <ListItemText primary="Items" sx={{ ml: 2 }} />
                            {opened ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>


                        <Collapse in={opened} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link to="/items" style={{ textDecoration: 'none', color: "black" }}>
                                    <ListItemButton sx={{ pl: 8, m: 0, textDecoration: "none", "&:hover": { background: "blue", color: 'white' } }}>
                                        <ListItemText primary="Items" />
                                    </ListItemButton>
                                </Link>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Price List" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, px: 5 }}>

                                    <ListItemText primary="inventory Management" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>

                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Banking */}
                            <AccountBalanceIcon sx={{ mr: 2 }} />
                            <ListItemText primary="Banking" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Box>


                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton onClick={handleitem} sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Sales */}

                            <ShoppingCartCheckoutSharpIcon onClick={handleDrawerOpen} sx={{ mr: 2 }} />

                            <ListItemText primary="Sales" sx={{ ml: 2 }} />
                            {items ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={items} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Customers" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Estimates" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Retainer Invoices" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Sales Orders" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Delivery Challans" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Invoices" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Payement Received" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Recurring Invoices" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Credit Notes" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>


                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton onClick={handlepurchase} sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* purchase */}

                            <ShoppingBasketSharpIcon onClick={handleDrawerOpen} sx={{ mr: 2 }} />

                            <ListItemText primary="Purchases" sx={{ ml: 2 }} />
                            {purchase ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={purchase} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Vendors" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Expenses" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Recurring Expenses" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Purchase Orders" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Bills" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Payements Made" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Recurring Bills" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Vendor Credits" />
                                </ListItemButton>


                            </List>
                        </Collapse>
                    </Box>


                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton onClick={handletime} sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Time Tracking */}

                            <TimerSharpIcon onClick={handleDrawerOpen} sx={{ mr: 2 }} />

                            <ListItemText primary="Time Tracking" sx={{ ml: 2 }} />
                            {time ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={time} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Projects" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Timesheet" />
                                </ListItemButton>


                            </List>
                        </Collapse>
                    </Box>

                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* e-way */}

                            <LocalShippingIcon sx={{ mr: 2 }} />

                            <ListItemText primary="e-Way Bills" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Box>

                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton onClick={handleacc} sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Account */}

                            <ManageAccountsSharpIcon onClick={handleDrawerOpen} sx={{ mr: 2 }} />

                            <ListItemText primary="Accountant" sx={{ ml: 2 }} />
                            {acc?<ExpandLess />:<ExpandMore />}
                        </ListItemButton>
                        <Collapse in={acc} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8, m: 0 }}>
                                    <ListItemText primary="Manual Journals" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Bulk Update" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Currency Adjustments" />

                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Charts Of Accounts" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 8, m: 0 }}>

                                    <ListItemText primary="Transaction Locking" />
                                </ListItemButton>


                            </List>
                        </Collapse>
                    </Box>


                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Report */}

                            <SignalCellularAltSharpIcon sx={{ mr: 2 }} />

                            <ListItemText primary="Reports" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Box>

                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Documents */}

                            <FolderSharpIcon sx={{ mr: 2 }} />

                            <ListItemText primary="Documents" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </Box>


                    <Box onClick={handleDrawerOpen}>
                        <ListItemButton sx={{ "&:hover": { background: "#2979ff", color: "white", fill: "white", } }}>{/* Documents */}

                            <AccountTreeSharpIcon sx={{ mr: 2 }} />

                            <ListItemText primary="Configure Feature List" sx={{ fontSize: "12px", ml: 1 }} />
                        </ListItemButton>
                    </Box>


                </List>



                <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, pb: 0}} elevation={0} >


                    {/*  <IconButton onClick={() => setOpen(!open)} disableTouchRipple disableRipple sx={{ background: "#bdbdbd", borderRadius: "0px", position: "sticky" }}>
     {open ? <ChevronLeftIcon onClick={handleClicked} sx={{ width: "30px", height: "30px", margin: "auto" }} /> : <ChevronRightIcon sx={{ width: "30px", height: "30px" }} />}
 </IconButton> */}

                    <Box onClick={() => setOpen(!open)} sx={{ backgroundColor:"#bdbdbd" ,display:"flex",justifyContent:"center",cursor:"pointer",py:0.5}}>

                        {open ? <ChevronLeftIcon onClick={handleClicked} sx={{ width: "30px", height: "30px" }}/> : <ChevronRightIcon sx={{ width: "30px", height: "30px"}}/>}

                    </Box>

                </Paper>





            </Drawer>





        </Box>
    );
}