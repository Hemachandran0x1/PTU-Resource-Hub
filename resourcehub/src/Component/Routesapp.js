import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Contribute from './Contribute'
import ContributeAuth from './ContributeAuth';
import Requestmain from './Requestmain';
import Home from './Home';
import Reportmain from './Reportmain';
function Routesapp() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/contribute" element={<Contribute/>}/>
                <Route path="/contributeAuth" element={<ContributeAuth/>}/>
                <Route path="/request" element={<Requestmain/>}/>
                <Route path="/report" element={<Reportmain/>}/>             
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routesapp
