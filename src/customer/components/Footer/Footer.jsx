import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from '@mui/material';


const Footer = () => {
    return (
        <div>
            <Grid className='bg-blue text-white text-center mt-10'
                container justifyContent="space-between"
                sx={{ bgcolor: "lightBlue", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        {" "}
                        Company{" "}
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            About{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Blog{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Press{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Jobs{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Partners{" "}
                        </Button>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        {" "}
                        Solutions{" "}
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Marketing{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Analytics{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Commerce{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Insights{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Support{" "}
                        </Button>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        {" "}
                        Documentation{" "}
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Guides{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            API status{" "}
                        </Button>

                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        {" "}
                        Legal{" "}
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Claims{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Privacy{" "}
                        </Button>

                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>
                            {" "}
                            Terms{" "}
                        </Button>

                    </div>
                </Grid>
            </Grid>
                        <Grid sx={{ bgcolor: "lightBlue", color: "white", py: 3, mt: 2 }} container justifyContent="center">
                <Grid item xs={12} textAlign="center">
                    <Typography variant="body2">&copy; 2023 My Company. All rights reserved.</Typography>
                    <Typography variant="body2">Made with ❤️ by Me.</Typography>
                    <Typography variant="body2">
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">Freepik</Link> from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">www.flaticon.com</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
