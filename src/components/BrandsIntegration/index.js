import React from 'react';
import "./brandIntegration.css"

const BrandIntegration = () => {
  return (
     <div>
      <img className='logo logo-trust' alt='trustimg' src={require('../../assets/trustWallet.png')}/>
      <img className='logo logo-WC' alt='trustimg' src={require('../../assets/walletconnect.png')}/>
      <img className='logo logo-metmask' alt='trustimg' src={require('../../assets/metamask.png')}/>
      <img className='logo logo-opensea' alt='trustimg' src={require('../../assets/opensea.png')}/>
      <img className='logo logo-punk' alt='trustimg' src={require('../../assets/punk.png')}/>
      </div>
  )
}

export default BrandIntegration;
