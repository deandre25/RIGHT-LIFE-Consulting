import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#6BAC8E' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            RIGHT LIFE Company
          </Typography>
        </Link>
        <nav>
          <Link href="#blog" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Blog</Button>
          </Link>
          <Link href="#contacts" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Contacts</Button>
          </Link>
          <Link href="#faq" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">FAQ</Button>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">About us</Button>
          </Link>
          <Link href="#search" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Search</Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
