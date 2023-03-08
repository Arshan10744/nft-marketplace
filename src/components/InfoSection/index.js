import React from 'react';
import { Info_Items } from "../../data/infoData";
import InfoItems from '../InfoItems';
import "./infoSection.css";

const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='is-heading'>
      <span className='heading-gradient'>Create and Sell your NFTs</span>
      </div>
      <div className='is-items-container'>
        {Info_Items.map((info_item)=>
        <InfoItems item={info_item} />
        
        )}
      </div>
    </div>
  )
}

export default InfoSection;