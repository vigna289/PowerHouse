import React, { useEffect } from 'react'
import { Button, Grid, TextField, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)

  useEffect(()=>{
    if(jwt)
    {
      dispatch(getUser(jwt))
    }
  },[jwt,dispatch])

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName:data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    }
    dispatch(register(userData))
    console.log("userData ", userData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Paper elevation={6} className="p-8 rounded-2xl w-full max-w-md">
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* First + Last Name in same line */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
              />
            </Grid>

            {/* Email on its own line */}
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>

            {/* Password on its own line */}
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
            </Grid>

            {/* Register button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  padding: "0.9rem",
                  bgcolor: "#9155FD",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#7a3ce0" },
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Login redirect */}
        <div className="flex justify-center mt-6 text-sm">
          <Typography variant="body2">
            Already have an account?{" "}
            <Button
              onClick={() => navigate("/login")}
              size="small"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Login
            </Button>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default RegisterForm;
