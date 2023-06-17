import React from 'react';
import {Route, Routes } from 'react-router-dom'; // to route bw homepg & ex detailpg.
import { Box } from '@mui/material'; //box is a div fro shading color

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail.js';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="40px" sx={{width: { xl: '1488px' }}} m="auto"> 
        <Navbar/>
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/exercise/:id" element={ <ExerciseDetail />} />
            </Routes>
            <Footer />
    </Box>
  )
}

export default App;
