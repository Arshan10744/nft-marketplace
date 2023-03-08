import React from 'react';
import "./infoItems.css";

const InfoItems = (props) => {
    const {item} = props;
  return (
    <div className='info-items absolute-Center'>
        <img alt='img' className='ii-icon' src={item.icon}/>
        <div className='ii-title'>{item.title}</div>
        <div className='ii-description'>{item.description}</div>
    </div>
  )
}

export default InfoItems;