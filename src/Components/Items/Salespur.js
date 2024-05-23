import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, TextField, Tooltip, Typography, MenuItem, FormControl, Select, Divider, DialogContent, IconButton, DialogTitle, Dialog, styled, FormLabel, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import { SxProps } from "@mui/material";
import Swal from "sweetalert2"













const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {

        padding: theme.spacing(1),
    },
}));


const sx: SxProps= {
    "& .MuiDialog-container": {
        alignItems: "flex-start"
    }
};




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Salespur = () => {

    



    const [account, setaccount] = React.useState(10);
    const [expense, setexpense] = React.useState(20)
    const [vendor, setvendor] = React.useState(10)
    const [good, setgood] = React.useState(10);

    const [open, setOpen] = React.useState(false);

    const [sub, setsub] = React.useState(false);

    const [cost, setcost] = React.useState("");



    const handlegoodChange = (event) => {
        setgood(event.target.value);
    };

    const handlecostChange = (event) => {
        setcost(event.target.value);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };


    const handleChange = (event) => {
        setaccount(event.target.value);
    };

    const handleExpenseChange = (event) => {
        setexpense(event.target.value);
    };



    const handleVendorChange = (event) => {
        setvendor(event.target.value);
    };

    const [user,setUser] = React.useState(
        {
          
          Description:"",
          Rate:""
    
        } 
      )
      const handleChanged = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };

        const handleSubmited = async (e) => {
            e.preventDefault();
            const { Name, Email } = user;
            const options = {
              method: 'post',
              headers: {
                'content-Type': 'application/json'
              },
              body: JSON.stringify({
                Name,
                Email
              })
            };
            try {
              const res = await fetch('https://finance-a707a-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json', options);
              if (res.ok) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Submitted Successfully",
                  showConfirmButton: false,
                  timer: 2500
                });
              } else {
                throw new Error("Error");
              }
            } catch (error) {
              Swal.fire({
                position: "top-center",
                icon: "error",
                title: "OOPS ERROR",
                showConfirmButton: false,
                timer: 2500
              });
            }
          };
    return (
        <form onSubmit={handleSubmited}>
        <Box sx={{ mb: 0 }}>{/* Main */}

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "85%", mb: 2 }}>{/* Sub */}



                
                <Box>{/* Sales */}

                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Checkbox {...label} defaultChecked />
                        <Typography>Sales Information</Typography>
                    </Box>

                    <Box sx={{ display: "flex", mt: 2, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>

                        <Tooltip title="The rate at which you're going to sell this item" placement='right' arrow >
                            <Typography sx={{ fontSize: "0.9rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Selling Price*</Typography>
                        </Tooltip>

                        <TextField variant='outlined' size='small' label="INR" name='Rate' value={user.Rate} onChange={handleChanged}></TextField>

                    </Box>

                    <Box sx={{ display: "flex", mt: 2, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>

                        <Tooltip title="All sales transactions for this item will be tracked under this account" placement='right' arrow >
                            <Typography sx={{ fontSize: "0.9rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Account*</Typography>
                        </Tooltip>

                        <FormControl size='small' sx={{ width: "225px", ml: 3.5, fontSize: "0.9rem" }} >

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={account}
                                sx={{ fontSize: "0.9rem" }}

                                onChange={handleChange}
                            >
                                <Typography sx={{ fontSize: "0.9rem", fontWeight: "700", ml: 1, color: "#2979ff", my: 1 }}>Income</Typography>
                                <MenuItem value={10} sx={{ fontSize: "0.8rem" }} >[36902] Sales</MenuItem>
                                <MenuItem value={20} sx={{ fontSize: "0.8rem" }} >[9952] Discount</MenuItem>
                                <MenuItem value={30} sx={{ fontSize: "0.8rem" }}>[9920] Genaral Income</MenuItem>
                                <MenuItem value={40} sx={{ fontSize: "0.8rem" }}>[50383] Interest Income</MenuItem>
                                <MenuItem value={50} sx={{ fontSize: "0.8rem" }}>[91408] Late Fee Income</MenuItem>
                                <MenuItem value={60} sx={{ fontSize: "0.8rem" }}>[25607] Other Changes</MenuItem>

                            </Select>
                        </FormControl>



                    </Box>

                    <Box sx={{ display: "flex", mt: 2, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>
                        <Typography sx={{ fontSize: "0.9rem" }}>Description</Typography>
                        <TextField multiline
                            rows={1}
                            maxRows={4} sx={{ width: "225px", ml: 1.5 }} value={user.Description} name='Description' onChange={handleChanged}></TextField>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                </Box>{/* Sales */}

                <Box >{/* purchase */}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Checkbox {...label} defaultChecked />
                        <Typography>Purchase Information</Typography>
                    </Box>

                    <Box sx={{ display: "flex", mt: 2, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>

                        <Tooltip title="The rate at which you going purchased this item" placement='right' arrow >
                            <Typography sx={{ fontSize: "0.9rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Cost Price*</Typography>
                        </Tooltip>

                        <TextField variant='outlined' size='small' label="INR"></TextField>

                    </Box>

                    <Box sx={{ display: "flex", mt: 2, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>

                        <Tooltip title="All purchase transactions for this item will be tracked under this account" placement='right' arrow >
                            <Typography sx={{ fontSize: "0.9rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Account*</Typography>
                        </Tooltip>

                        <FormControl size='small' sx={{ width: "225px", ml: 2, fontSize: "0.9rem" }} >

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={expense}
                                sx={{ fontSize: "0.9rem" }}
                                onChange={handleExpenseChange}

                               
                            >
                                <Typography sx={{ fontSize: "0.9rem", fontWeight: "700", ml: 1, color: "#2979ff", my: 1 }}>Expense</Typography>
                                <MenuItem value={20} sx={{ fontSize: "0.8rem" }} >[12938] Advertising And Marketing</MenuItem>
                                <MenuItem value={30} sx={{ fontSize: "0.8rem" }}>[11417] Automobile Expense</MenuItem>
                                <MenuItem value={40} sx={{ fontSize: "0.8rem" }}>[74821] Bad Debt</MenuItem>
                                <MenuItem value={50} sx={{ fontSize: "0.8rem" }}>[72539] Bank Fees and Charges</MenuItem>
                                <MenuItem value={60} sx={{ fontSize: "0.8rem" }}>[95188] Consultant Expense</MenuItem>
                                <MenuItem value={70} sx={{ fontSize: "0.8rem" }}>[4182] Credit Card Charges</MenuItem>
                                <MenuItem value={80} sx={{ fontSize: "0.8rem" }}>[24978] Depreciation Expense</MenuItem>
                                <MenuItem value={90} sx={{ fontSize: "0.8rem" }}>[24] IT and Internet Expenses </MenuItem>
                                <MenuItem value={100} sx={{ fontSize: "0.8rem" }}>[47292] Janitorial Expense </MenuItem>
                                <MenuItem value={110} sx={{ fontSize: "0.8rem" }}>[20976] Lodging</MenuItem>
                                <MenuItem value={120} sx={{ fontSize: "0.8rem" }}>[78452] Meals and Entertainment</MenuItem>
                                <MenuItem value={130} sx={{ fontSize: "0.8rem" }}>[78808] Office Supplies </MenuItem>
                                <MenuItem value={140} sx={{ fontSize: "0.8rem" }}>[78779] Other Expenses</MenuItem>
                                <MenuItem value={150} sx={{ fontSize: "0.8rem" }}>[75194] Postage</MenuItem>
                                <MenuItem value={160} sx={{ fontSize: "0.8rem" }}>[44] Printing and Stationery</MenuItem>
                                <MenuItem value={170} sx={{ fontSize: "0.8rem" }}>[39734] Rent Expenses</MenuItem>
                                <MenuItem value={180} sx={{ fontSize: "0.8rem" }}>[16618] Repairs and Maintenance</MenuItem>
                                <MenuItem value={190} sx={{ fontSize: "0.8rem" }}>[67333] Salaies and Employee Wages</MenuItem>
                                <MenuItem value={200} sx={{ fontSize: "0.8rem" }}>[37081] Telephone Expense</MenuItem>
                                <MenuItem value={210} sx={{ fontSize: "0.8rem" }}>[9276] TravelExpense</MenuItem>
                                <MenuItem value={220} sx={{ fontSize: "0.8rem" }}>[5287] Uncategorized</MenuItem>
                                <MenuItem value={230} sx={{ fontSize: "0.8rem" }}>[5770] Contract Assets</MenuItem>
                                <MenuItem value={240} sx={{ fontSize: "0.8rem" }}>[47337] Depreciation And Amortisation</MenuItem>
                                <MenuItem value={250} sx={{ fontSize: "0.8rem" }}>[62820] Merchandise</MenuItem>
                                <MenuItem value={260} sx={{ fontSize: "0.8rem" }}>[10689] Raw Materials And Consumables</MenuItem>
                                <MenuItem value={270} sx={{ fontSize: "0.8rem" }}>[22285] Transportation Expense </MenuItem>
                                <Typography sx={{ fontSize: "0.9rem", fontWeight: "700", ml: 1, color: "#2979ff", my: 1 }}>Cost Of Goods Sold</Typography>

                                <MenuItem value={10} sx={{ fontSize: "0.8rem" }} >[39671] Cost of Goods Sold</MenuItem>
                                <MenuItem value={280} sx={{ fontSize: "0.8rem" }}>[28227] Job Costing</MenuItem>
                                <MenuItem value={290} sx={{ fontSize: "0.8rem" }}>[89338] Labour</MenuItem>
                                <MenuItem value={300} sx={{ fontSize: "0.8rem" }}>[39204] Materials</MenuItem>
                                <MenuItem value={310} sx={{ fontSize: "0.8rem" }}>[28029] Subcontractor</MenuItem>
                                <Typography sx={{ fontSize: "0.9rem", fontWeight: "700", ml: 1, color: "#2979ff", my: 1 }}>Fixed Asset</Typography>

                                <MenuItem value={320} sx={{ fontSize: "0.8rem" }}>[55601] Furniture and Eqipment</MenuItem>



                                <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, pb: 2 }} elevation={0} onClose={handleClickClose}>
                                    <Divider />
                                    <Box >
                                        <Box sx={{ mt: 2, ml: 2, mb: 0, display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleClickOpen}  >

                                            <AddIcon sx={{ fontSize: "1.2rem", mr: "5px", color: "white", background: "#2979ff", borderRadius: "100%", }} />
                                            <Typography sx={{ fontSize: "0.9rem", fontWeight: "600", color: "#2979ff" }} >New Account</Typography>
                                        </Box>
                                    </Box>


                                    <BootstrapDialog
                                        onClose={handleClickClose}
                                        aria-labelledby="customized-dialog-title"
                                        
                                        scroll="paper"
                                        sx={{
                                            "& .MuiDialog-container": {
                                                "& .MuiPaper-root": {
                                                    width: "100%",
                                                    maxWidth: "800px",  // Set your width here
                                                },
                                            },
                                        }}

                                        open={open}
                                    >
                                        <Box sx={{ background: "#eceff1", display: "flex", justifyContent: "space-between" }}>
                                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                                Create Account
                                            </DialogTitle>
                                            <IconButton
                                                aria-label="close"
                                                onClick={handleClickClose}
                                                sx={{
                                                    position: 'absolute',
                                                    right: 8,
                                                    top: 8,
                                                    color: (theme) => theme.palette.grey[500],
                                                }}
                                            >
                                                <CloseIcon sx={{ color: 'red' }} />
                                            </IconButton>
                                        </Box>
                                        <DialogContent dividers>
                                            <Box sx={{ display: "flex", gap: 6 }}>
                                                <Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>{/*Acc */}
                                                        <FormLabel sx={{ color: "red", fontSize: "0.9rem" }}>Account Type*</FormLabel>
                                                        <FormControl size='small' sx={{ width: "300px", ml: 4, fontSize: "0.9rem" }} >

                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={good}
                                                                sx={{ fontSize: "0.9rem" }}
                                                                disabled
                                                                onChange={handlegoodChange}
                                                            >

                                                                <MenuItem value={10} sx={{ fontSize: "0.8rem" }}>Cost Of Goods Sold</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </Box>{/* Acc */}

                                                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>{/*Acc Name */}
                                                        <FormLabel sx={{ color: "red", fontSize: "0.9rem" }}>Account Name*</FormLabel>
                                                        <TextField type='text' variant="outlined" sx={{ width: "300px", ml: 3 }} size="small" required />
                                                    </Box>{/* Acc  Name*/}

                                                    <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 14.5 }}>
                                                        <Checkbox {...label} onClick={() => { setsub(!sub) }} />
                                                        <Typography sx={{ fontSize: "0.9rem" }}>Make this is a sub account</Typography>
                                                        <Tooltip title="Select this option if you are creating a sub-account." placement="bottom" arrow >
                                                            <HelpOutlineIcon sx={{ pl: "5px", cursor: "pointer" }} />
                                                        </Tooltip>

                                                    </Box>
                                                    {sub && <Box> <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>{/*Acc Name */}
                                                        <FormLabel sx={{ color: "red", fontSize: "0.9rem" }}>Parent Account*</FormLabel>
                                                        <FormControl size='small' sx={{ width: "300px", ml: 2.5, fontSize: "0.9rem" }} >

                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={cost}
                                                                sx={{ fontSize: "0.9rem" }}

                                                                onChange={handlecostChange}

                                                            >

                                                                <Typography sx={{ fontSize: "0.9rem", fontWeight: "700", ml: 1, color: "#2979ff", my: 1 }}>Cost Of Goods Sold</Typography>
                                                                <MenuItem value={10} sx={{ fontSize: "0.8rem" }}>[3983] Cost Of Goods Sold</MenuItem>
                                                                <MenuItem value={20} sx={{ fontSize: "0.8rem" }}>[78404] Job Costing</MenuItem>
                                                                <MenuItem value={30} sx={{ fontSize: "0.8rem" }}>[8670] Labour</MenuItem>
                                                                <MenuItem value={40} sx={{ fontSize: "0.8rem" }}>[44980] Materials</MenuItem>
                                                                <MenuItem value={50} sx={{ fontSize: "0.8rem" }}>[1636] Sub Contractor</MenuItem>

                                                            </Select>
                                                        </FormControl>

                                                    </Box>
                                                        <Box>
                                                            <Typography sx={{ fontSize: "0.9rem", ml: 15.5, mt: 1 }}>Select an account</Typography>

                                                        </Box>
                                                    </Box>}

                                                    <Box sx={{ display: "flex", mt: 2, cursor: "default", alignItems: "center", }}>

                                                        <Tooltip title="The rate at which you going purchased this item" placement='right' arrow >
                                                            <Typography sx={{ fontSize: "0.8rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Account Code</Typography>
                                                        </Tooltip>

                                                        <TextField variant='outlined' size='small' sx={{ ml: 5.5 }}></TextField>

                                                    </Box>

                                                    <Box sx={{ display: "flex", mt: 2, cursor: "default", alignItems: "center" }}>
                                                        <Typography sx={{ fontSize: "0.9rem" }}>Description</Typography>
                                                        <TextField multiline
                                                            rows={1}
                                                            maxRows={4} sx={{ width: "225px", ml: 6.5 }}></TextField>
                                                    </Box>
                                                </Box>

                                                <Box sx={{ fontSize: "12px", color: "white" }}>{/* Text */}
                                                    <Box sx={{ width: "250px", height: "150px", background: "black", borderRadius: "10px" }}>
                                                        <Typography sx={{ fontSize: "12px", pt: 1, ml: 1, fontWeight: "700" }}>Expense</Typography>
                                                        <Typography sx={{ fontSize: "12px", mt: 1.5, ml: 1, fontWeight: "500" }}>This indicates the direct costs attributable to the production of the goods sold by a company such as:</Typography>

                                                        <Typography sx={{ fontSize: "12px", mt: 1.5, ml: 1 }}>Material and Labor costs</Typography>
                                                        <Typography sx={{ fontSize: "12px", mt: 0.5, ml: 1 }}>Cost of obtaining raw materials</Typography>
                                                    </Box>
                                                </Box>{/* Text */}


                                            </Box>
                                            <Divider sx={{ my: 3 }} />
                                            <Box sx={{ mt: 2 }} >
                                                <Button variant='contained'>Save</Button>
                                                <Button variant='outlined' sx={{ ml: 2 }} onClick={handleClickClose}>Cancel</Button>
                                            </Box>

                                        </DialogContent >

                                    </BootstrapDialog>
                                </Paper>

                            </Select>
                        </FormControl>



                    </Box>

                    <Box sx={{ display: "flex", mt: 2, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>
                        <Typography sx={{ fontSize: "0.9rem" }}>Description</Typography>
                        <TextField multiline
                            rows={1}
                            maxRows={4} sx={{ width: "225px", }}></TextField>
                    </Box>

                    <Box sx={{ display: "flex", mt: 4, ml: 2, cursor: "default", alignItems: "center", gap: 8 }}>

                        <Typography sx={{ fontSize: "0.9rem" }}>Preferred Vendor</Typography>

                        <FormControl size='small' sx={{ width: "225px", ml: -4.5, fontSize: "0.9rem" }} >

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={vendor}
                                sx={{ fontSize: "0.9rem" }}


                                onChange={handleVendorChange}
                            >
                                <MenuItem disabled value="" sx={{ color: "blue" }}>Income</MenuItem>
                                <MenuItem value={10} sx={{ fontSize: "0.8rem" }} >[36902] Sales</MenuItem>
                                <MenuItem value={20} sx={{ fontSize: "0.8rem" }} >[9952] Discount</MenuItem>
                                <MenuItem value={30} sx={{ fontSize: "0.8rem" }}>[9920] Genaral Income</MenuItem>
                                <MenuItem value={40} sx={{ fontSize: "0.8rem" }}>[50383] Interest Income</MenuItem>
                                <MenuItem value={50} sx={{ fontSize: "0.8rem" }}>[91408] Late Fee Income</MenuItem>
                                <MenuItem value={60} sx={{ fontSize: "0.8rem" }}>[25607] Other Changes</MenuItem>

                            </Select>
                        </FormControl>

                    </Box>
                </Box>{/* purchase */}

            </Box>{/* Sub */}

            <Box  >{/* Default */}
                <Typography>Default Tax Rates</Typography>
                <Box sx={{ display: "flex", mt: 2, ml: 0, cursor: "default", alignItems: "center", gap: 8 }}>
                    <Tooltip title="Intra State tax rate can be used when tansactions raised for contacts within your home state." placement='right' arrow >
                        <Typography sx={{ fontSize: "0.9rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Intra State Tax Rate</Typography>
                    </Tooltip>

                    <Typography sx={{ fontSize: '0.9rem' }}>GST12 (12 %)</Typography>

                </Box>

                <Box sx={{ display: "flex", mt: 4, ml: 0, cursor: "default", alignItems: "center", gap: 8 }}>
                    <Tooltip title="Inter State tax rate can be used when tansactions raised for contacts within your home state." placement='right' arrow >
                        <Typography sx={{ fontSize: "0.9rem", borderBottom: "dotted", borderBottomWidth: 2 }}>Inter State Tax Rate</Typography>
                    </Tooltip>

                    <Typography sx={{ fontSize: '0.9rem' }}>IGST12 (12 %)
                    </Typography>

                </Box>
            </Box>{/* Default */}
            <Divider sx={{ width: "90%", my: 4 }} />

            <Box>{/* Tracking */}

                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography>Track Inventory for this item</Typography>
                    <Tooltip title="Enable this option to track this item's stock based on its sales and purchase transactions." placement="right" arrow >
                        <HelpOutlineIcon sx={{ pl: "5px", cursor: "pointer" }} />
                    </Tooltip>
                </Box>

                <Typography sx={{ cursor: "default", fontSize: "0.8rem", ml: 5.5, fontWeight: "600" }}>You cannot enable/disable inventory tracking once you've created transactions for this item</Typography>


            </Box>{/* Tracking */}

            <Divider sx={{ width: "90%", my: 4 }} />



        </Box>
        </form>

    )
}

export default Salespur