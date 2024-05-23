import React from 'react'

import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';








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


   

export default function Interface() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
            <Toolbar />
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Box >
                    <Typography sx={{ display: "flex", alignItems: "center", fontSize: "1rem", fontWeight: "600" }}>
                        <FilterNoneIcon sx={{ mr: 1 }} />
                        Hello Users
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
                    <Typography sx={{ fontSize: "0.8rem" }}>Techbrain Networks : 0234567</Typography>
                    <Typography sx={{ fontSize: "0.7rem" }}>Mon - Fri .9:00 AM - 7:00 PM Toll Free</Typography>
                    <Typography sx={{ fontSize: "0.7rem" }}>English, हिन्दी, தமிழ், తెలుగు, മലയാളം, ಕನ್ನಡ</Typography>
                </Box>
            </Box>

            <Box>
                <Stack spacing={2} direction="row">


                    <Tabs
                        onChange={handleChange}
                        value={value}
                        aria-label="Tabs where each tab needs to be selected manually"
                    >
                        <Tab sx={{ fontSize: "0.9rem", textTransform: "none" }} label="Dashboard" />
                        <Tab sx={{ fontSize: "0.9rem", textTransform: "none" }} label="Fiscal Year-End Tasks" />
                        <Tab sx={{ fontSize: "0.9rem", textTransform: "none" }} label="Announcements" />
                        <Tab sx={{ fontSize: "0.9rem", textTransform: "none" }} label="Getting Started"


                        ><KeyboardArrowDownIcon id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="text"
                            disableElevation
                            onClick={handleClick} /></Tab>


                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                Getting Startded

                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>

                                More Updates
                            </MenuItem>


                        </StyledMenu>




                    </Tabs>


                </Stack>
            </Box>
        </Box>
    )
}

