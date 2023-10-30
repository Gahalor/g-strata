// import styles from './style';
// import React from 'react';

// import { Hero, Solutions, Company, Partners, Explorer, Services, CTA, Footer, Instruments } from './components';
// import { Routes, Route } from "react-router-dom";

import React, { Component } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import HomePage from './components/HomePage'; 
import ProspectionPage from './components/ProspectionPage'; 
import SearchPage from './components/SearchPage';
import InformationPage from './components/InformationPage'; 

// import './App.css'; 

class App extends Component { 
render() { 
    return ( 
    <Router> 
        <Routes> 
                <Route exact path='/' element={< HomePage />}></Route> 
                <Route exact path='/prospection' element={< ProspectionPage />}></Route> 
                <Route exact path='/search' element={< SearchPage />}></Route> 
                <Route exact path='/information' element={< InformationPage />}></Route> 
        </Routes> 
    </Router> 
); 
} 
} 

export default App;