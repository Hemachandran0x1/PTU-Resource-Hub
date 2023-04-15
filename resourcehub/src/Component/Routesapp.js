import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Contribute from './Contribute'
import ContributeAuth from './ContributeAuth';
import Home from './Home';
function Routesapp() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Contribute" element={<Contribute/>}/>
                <Route path="/ContributeAuth" element={<ContributeAuth/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routesapp
