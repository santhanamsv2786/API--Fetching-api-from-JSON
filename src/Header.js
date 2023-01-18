import { Button } from 'react-bootstrap';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='text-center first'>
      <h1 className='mt-5'> Workers Information</h1>
      <Button><Link to="detail">View Details</Link></Button>
      
    </div>
  );
}

export default Header;
