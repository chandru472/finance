import { Typography, Box, MenuItem, Divider, styled, Menu, Tooltip, Grid, } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import React from 'react'
import Cardone from './Cardone';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 0,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));



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
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,

        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '0px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },

        },
    },
}));

const Card = () => {



    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>{/* Main */}

            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={5} rowSpacing={2} columnSpacing={2}>
                    <Box sx={{ boxShadow: 2, p: 2, borderRadius: "10px", }}>{/* Card one */}

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>{/* one */}

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography>Total Receivables</Typography>

                                <Tooltip title="Current And Overdue Amount That You're Yet To Receive From Customers" placement="top" arrow >
                                    <HelpOutlineIcon sx={{ pl: "5px", cursor: "pointer" }} />
                                </Tooltip>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}

                                disableElevation
                                onClick={handleClick}>

                                <AddIcon sx={{ fontSize: "1.2rem", mr: "5px", color: "white", background: "#2979ff", borderRadius: "100%", }} />
                                <Typography>New</Typography>

                            </Box>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} disableRipple sx={{ "&:hover": { background: "#2979ff", color: "white",fill:"white" }, fontSize: "0.9rem" }}>
                                    <AddIcon sx={{ fontSize: "1.2rem", color: "#2979ff", background: "", borderRadius: "100%", fontWeight: "700","&:hover":{fill:"white"} }} />
                                    New Invoice
                                </MenuItem>
                                <MenuItem onClick={handleClose} disableRipple sx={{ "&:hover": { background: "#2979ff", color: "white" }, fontSize: "0.9rem" }}>
                                    <AddIcon />
                                    New Recurring Invoice
                                </MenuItem>

                                <MenuItem onClick={handleClose} disableRipple sx={{ "&:hover": { background: "#2979ff", color: "white" }, fontSize: "0.9rem" }}>
                                    <AddIcon />
                                    New Customer Payment
                                </MenuItem>

                            </StyledMenu>

                        </Box>{/* one */}

                        <Divider sx={{ my: 2 }} />

                        <Box>{/* two */}
                            <Typography sx={{ fontSize: "0.8rem" }}>Total Unpaid Invoices ₹372,580.05</Typography>

                            <BorderLinearProgress variant="determinate" value={100} sx={{ mb: 3, mt: 1 }} />
                        </Box>{/* two */}

                        <Divider sx={{ mt: 2, mb: 3 }} />

                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "75%", mx: "auto" }}>{/* three */}

                            <Box>
                                <Typography sx={{ fontSize: "0.8rem", color: "#2979ff" }}>CURRENT</Typography>

                                <Typography sx={{ fontSize: "1.5rem", mt: 1 }}>&#8377;0.00</Typography>
                            </Box>

                            <Box sx={{ width: '1px', height: "50px", background: "grey" }}></Box>

                            <Box>
                                <Typography sx={{ fontSize: "0.8rem", color: "red" }}>OVERDUE</Typography>

                                <Typography sx={{ fontSize: "1.5rem", mt: 1 }}>&#8377;372,580.05</Typography>
                            </Box>

                        </Box>{/* three */}

                    </Box>{/* Card one */}
                </Grid>

                <Grid item xs={12} md={6} lg={5} rowSpacing={2} columnSpacing={2}>
                    <Box sx={{  boxShadow: 2, p: 2, borderRadius: "10px", }}>{/* Card Two */}

                        <Cardone />

                    </Box>{/* Card Two */}
                </Grid>

            </Grid>


        </Box> /* Main */
    )
}

export default Card