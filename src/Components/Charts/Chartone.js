import { Box, MenuItem, styled, Menu, Typography, Tooltip, Grid } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'

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
            /* '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            } */
        },
    },
}));



const Chartone = () => {



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container>
            <Grid item xs={12}  lg={8}>
                <Box sx={{ marginTop: "30px" }}>



                    <Box sx={{ display: "flex", justifyContent: "space-between", boxShadow: 2, p: 2, borderRadius: "10px" }}>{/* one */}

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography>Cash Flow</Typography>

                            <Tooltip title="Amount of money moving in and out of your business" placement="top" arrow >
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


                            <Typography sx={{ fontSize: "0.8rem" }}>This Fiscal Year</Typography>
                            <KeyboardArrowDownIcon />

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
                            <MenuItem onClick={handleClose} disableRipple sx={{ "&:hover": { background: "#2979ff", color: "white" }, fontSize: "0.9rem" }}>
                                This Fiscal Year
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple sx={{ "&:hover": { background: "#2979ff", color: "white" }, fontSize: "0.9rem" }}>
                                Previous Fiscal Year
                            </MenuItem>

                            <MenuItem onClick={handleClose} disableRipple sx={{ "&:hover": { background: "#2979ff", color: "white" }, fontSize: "0.9rem" }}>
                                Last 12 Months
                            </MenuItem>

                        </StyledMenu>

                    </Box>{/* one */}

                    <Box>


                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Chartone