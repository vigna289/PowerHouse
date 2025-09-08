import React from 'react'
import { TextField, Button, Box } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const data=new FormData(e.currentTarget);
    const address={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber")
    }
    console.log("address",address)
  }
  return (
    <div className="flex gap-4">
      {/* Left side - AddressCard */}
      <div className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll p-5 py-7">
        <AddressCard />
        <Button
          sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
          size="large"
          variant="contained"
        >
          Deliver Here
        </Button>
      </div>

      {/* Right side - Form */}
      <Box className="border rounded-s-md shadow-md p-5 flex-1">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="given-name"
              multiline
              rows={4}
              className="col-span-2"
            />
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip/Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="given-name"
            />
            <Button
              sx={{ py: 1.5,mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              type="submit"
              className="col-span-2"
            >
              Deliver Here
            </Button>
          </div>
        </form>
      </Box>
    </div>
  )
}

export default DeliveryAddressForm
