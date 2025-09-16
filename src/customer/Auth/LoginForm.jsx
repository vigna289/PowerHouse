import React from 'react'
import { Button, Grid, TextField ,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';
import { useEffect } from 'react';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch =useDispatch();



    const handleSubmit= (event) =>{
        event.preventDefault()
    
        const data=new FormData(event.currentTarget);

        const userData = {
            email : data.get("email"),
            password : data.get("password")
        }
        dispatch(login(userData))
        console.log("userData ",userData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

            <Grid item xs={12} >
                <TextField
                required
                id='email'
                name='email'
                label="Email"
                fullWidth
                autoComplete='email'
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                required
                id='password'
                name='password'
                label="Password"
                fullWidth
                autoComplete='password'
                />
            </Grid>
            <Grid item xs={12} >
                <Button className='bg-[#9155FD] w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem 0",bgcolor:"#9155FD"}}>
                    Login
                </Button>
            </Grid>
        </Grid>
      </form>
              {/* Login redirect */}
        <div className="flex justify-center mt-6 text-sm">
          <Typography variant="body2">
            Don't have an account?{" "}
            <Button
              onClick={() => navigate("/register")}
              size="small"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Register
            </Button>
          </Typography>
        </div>

    </div>
  )
}

export default LoginForm
