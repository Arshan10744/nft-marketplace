import React from 'react';
import "./topFold.css";
import { useNavigate } from 'react-router-dom';


const TopFold = () => {
  const navigate = useNavigate()
  return (
    <div className='topfold absolute-Center'>
      <div className='tf-left'>
        <div className='tf-heading'>
          Discover Collect & Sell <span className='heading-gradient'>Extraordinary</span> Nfts
        </div>
        <div className='tf-description'>Experience the most trending NFT's. Don't miss out on our latest NFT collection, probably the most trending out there.</div>
        <div className='buttons'>
        <button className='primary-btn' onClick={()=>navigate('/login')}>Sign In</button>
        <button className='secondary-btn' onClick={()=>navigate('/SignUp')}>Sign Up</button>
        </div>
        <div className='info-stats'>
        <div className='stats'>
          <div className='stat-count'>200k+</div>
          <div className='stat-label'>Collections</div>
        </div>
        <div className='stats'>
          <div className='stat-count'>10k+</div>
          <div className='stat-label'>Artists</div>
        </div>
        <div className='stats'>
          <div className='stat-count'>211k+</div>
          <div className='stat-label'>Community</div>
        </div>
        </div>
      </div>
      <div className='tf-right'>
        <div className='tf-right-diamond'>
         <div className='tf-r-diamond-item absolute-Center'>
          <img className='tf-r-diamond-img' alt='diamond-banner' src='https://i.seadn.io/gcs/files/2c8a3d7313ad9583e2395a72974f32d8.gif?auto=format&w=256'/>
         </div>
      
         <div className='tf-r-diamond-item absolute-Center'>
          <img className='tf-r-diamond-img' alt='diamond-banner' src='https://i.seadn.io/gcs/files/121bf29dcb4d3998171e9eb1f1e33b0d.gif?auto=format&w=256'/>
         </div>
       
         <div className='tf-r-diamond-item absolute-Center'>
          <img className='tf-r-diamond-img' alt='diamond-banner' src='https://i.seadn.io/gcs/files/3f22adf317894f9f8e5d2456e5e84bde.gif?auto=format&w=256'/>
         </div>
       
         <div className='tf-r-diamond-item absolute-Center'>
          <img className='tf-r-diamond-img' alt='diamond-banner' src='https://i.seadn.io/gcs/files/d2f98246ff0c82b6161cc0489b5772bf.gif?auto=format&w=256'/>
         </div>
       </div> 
      </div>
    
    </div>
  )
}

export default TopFold;