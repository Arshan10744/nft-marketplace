import React, { useEffect } from 'react'
import "./SellNFT";
import axios from 'axios';
import { useState} from 'react';
import NavigationBar from '../NavBar/NavigationBar';
import { useParams } from 'react-router-dom';

const SellNFT = () => {

  const url = "http://localhost:4000/nft/create";
	const [nft,setNft] = useState({
		name: "",
		price:"",
		description: ""

	});

	

  function submit(e){
		e.preventDefault();
		const config = {
			headers: {
				"authorization" : localStorage.getItem("jwt")
			}
		};
		console.log(config);
		axios.post(url, {
			name: nft.name,
			price: nft.price,
			description: nft.description
		}, config)
			
		.then(res=>{
			console.log(res.nft);
		})
	}

	
	function handle(e){
		const newNft = {...nft}
		newNft[e.target.id] = e.target.value
		setNft(newNft)
		console.log(newNft);
	}

  return (
    <div>
    <NavigationBar />
  <div className="AddProductPage">

  <div className="addproductForm">
      <h1 className="addproductheading heading-gradient">SELL AN NFT</h1>
      
      <form onSubmit={(e) =>submit(e)}>

      <input type="text" onChange={(e) =>handle(e)} id='name' value={nft.name} className="addproducttextbox" placeholder="Add Title"></input>
      <input type="text" onChange={(e) =>handle(e)} id='price' value={nft.price} className="addproducttextbox" placeholder="Add Price" ></input>
    
      <input type="text" onChange={(e) =>handle(e)} id='description' value={nft.description} className="addproducttextbox" placeholder="Add Category"></input>
      <button value="Submit" className="addproductsubmitbutton"> Sell </button>
      </form>
      
      
  </div>

</div>
</div>
  )
}

export default SellNFT









