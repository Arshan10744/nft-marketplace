import React from 'react'
import NavigationBar from '../NavBar/NavigationBar';
import "./Update.css";

const Update = () => {
  return (
    <div>
      <NavigationBar />
    <div className="AddProductPage">

    <div className="addproductForm">
        <h1 className="addproductheading heading-gradient">Update NFT</h1>
        <input type="text" className="addproducttextbox" placeholder="Add Title"></input>
        <input type="text" className="addproducttextbox" placeholder="Add Price" ></input>
        
        <input type="text" className="addproducttextbox" placeholder="Add Category"></input>
        <button value="Submit" className="addproductsubmitbutton">Update</button>
        
        
    </div>

</div>
</div>
  )
}

export default Update