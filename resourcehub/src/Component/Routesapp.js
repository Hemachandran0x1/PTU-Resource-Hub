import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
function Routesapp() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
               
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routesapp
