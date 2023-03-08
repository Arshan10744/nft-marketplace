import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import AllNft from './components/AllNft/AllNft'
import NavigationBar from './components/NavBar/NavigationBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HomePage from './pages/HomePage/HomePage';
import Update from './components/Update/Update';
import SellNFT from './components/SellNFT/SellNFT';
import MyNFTCard from './components/MyNFTCards/MyNFTCard';
import Private from './Private';



const App = () => {

  return (
    <BrowserRouter>
   
    <div className='max-width'>
      
      

      <Routes>
        
        <Route path='/' element ={<LandingPage />}></Route>
        <Route path='/allNft' element={ <AllNft/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/update' element={<Private Component={Update}/>}></Route>
        <Route path='/myNfts' element={<Private Component={MyNFTCard}/>}></Route>
        <Route path='/sellNft' element={<Private Component={SellNFT}/>}></Route>
        
      
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
