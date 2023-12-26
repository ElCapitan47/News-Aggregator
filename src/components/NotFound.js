import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const NotFoundComponent = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-app-black text-white">

          <div className="relative z-10 text-center space-y-3">
            <Typography variant="h1" component="h1" className="text-6xl font-extrabold mb-4">
              404
            </Typography>
            <Typography variant="h5" component="h2" className="text-2xl font-semibold mb-8">
              Oops! Page not found.
            </Typography>
            <Typography variant="body1" className="text-lg mb-6">
              The page you are looking for might be in another dimension or doesn't exist.
            </Typography>
            <div className='mt-10'>
                <Link to="/" className="underline block ">
                <Button variant="contained" color="primary">
                    Go to Home
                </Button>
                </Link>

            </div>
            
          </div>
        </div>
      );
    
}

export default NotFoundComponent
