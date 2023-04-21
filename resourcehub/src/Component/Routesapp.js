import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Contribute from './Contribute'
import ContributeAuth from './ContributeAuth';
import Requestmain from './Requestmain';
import Home from './Home';
import Reportmain from './Reportmain';
import Requestsubmit from './Requestsubmit';
import Reportsubmit from './Reportsubmit';
import Request from './Request';
import Credentials from './Credentials';
import Unitpage from './Unitpage';
import About from './About';
import Subject from './Subject';
function Routesapp() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subject/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/contribute" element={<Contribute/>}/>
                <Route path="/contributeAuth" element={<ContributeAuth/>}/>
                <Route path="/request" element={<Requestmain/>}/>
                <Route path="/report" element={<Reportmain/>}/> 
                <Route path="/submit_request" element={<Requestsubmit/>}/>
                <Route path="/submit_report" element={<Reportsubmit/>}/>
                <Route path="/requestsadd" element={<Request/>}/>    
                <Route path="/credentials" element={<Credentials/>}/>        
                <Route path="/unit" element={<Unitpage/>}/>     
                <Route path="/requestsadd" element={<Request/>}/>
                <Route path="/about" element={<About/>}/>   
                          
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routesapp
