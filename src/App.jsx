import { useState } from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
function App() {

  return (
    <>
  <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
