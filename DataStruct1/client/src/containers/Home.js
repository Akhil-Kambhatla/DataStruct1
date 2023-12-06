import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import {Routes,Route } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import CommentForm from '../pages/CommentForm';
import Timeline from '../pages/Timeline'
import Welcome from '../pages/Welcome'
import ParentComponent from '../pages/ParentComponent';


const Home = ({isAuthenticated}) => {
  return (
    <div>
        <Navbar isAuthenticated={isAuthenticated}/>
    
    <div style={{marginTop:'80px'}}>

        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/timeline' element={<Timeline/>}/>
            <Route path='/userfeedback' element={<ParentComponent/>}/>
        </Routes>
        
    </div>
    </div>
  )
}

export default Home