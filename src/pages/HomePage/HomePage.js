import React from 'react'
import NavigationBar from '../../components/NavBar/NavigationBar'
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
        <NavigationBar />
        <div className='contain'>
            <img className='cover-img' alt='cover' src='https://media.newyorker.com/photos/61016c1c7a2a603b3075c7b8/master/w_2560%2Cc_limit/chayka-boredapeclub.jpg'/>
            <h1 className='text1 heading-gradient'>WELCOME</h1>
            <h1 className=' text2  heading-gradient'>To The Most Popular NFT Marketplace</h1>
            <h1 className='text3 heading-gradient'>Featuring Multiple Categories For The User</h1>
            <button className='home-btn'>Get Started</button>
           
        </div>
       
    </div>
  )
}

export default HomePage