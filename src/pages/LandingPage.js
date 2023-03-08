import React from 'react'
import { Navbar } from 'react-bootstrap';
import Header from '../components/Header'
import NavigationBar from '../components/NavBar/NavigationBar';
import TopFold from '../components/TopFold';

const LandingPage = () => {
  return (
    <div>
      <>
      <NavigationBar />
     <Header />
      <TopFold />
</>
    </div>
  )
}

export default LandingPage