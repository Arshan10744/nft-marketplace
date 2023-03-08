import React, { useState, useEffect } from "react";
import NavigationBar from "../NavBar/NavigationBar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./MyNFTCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyNFTCard = () => {
  const navigate = useNavigate();
  const [nft, setNft] = useState([]);
  
  
  useEffect(() => {
    getNfts();
  }, []);
  

  const deleteNft = async(id)=>{
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwt"),
        },
      };
      if(window.confirm("Are you sure you want to delete this NFT")){
        const response = await axios.delete(`http://localhost:4000/nft/${id}`, config);
        getNfts();
      }
    } catch (error) {
      console.log(error);
    }
   

  }

  const getNfts = async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwt"),
        },
      };
      const response = await axios.get(
        "http://localhost:4000/nft/userNfts",
        config
      );
      setNft(response?.data?.payload?.nfts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        <span className="My-NFT-heading heading-gradient absolute-Center">
          My NFT Collection
        </span>
      </div>
      <div className="row container">
        {nft &&
          nft.map((item) => {
            return (
              <div className="col-md-3 col-sm-6 col-lg-3 my-2">
                <Card className="Trending_Card" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title className="card-name">{item.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="card-price">
                      {" "}
                      {item.price}
                      <span className="card-category">{item.description}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="card-price">
                      <button className="update-button"onClick={() => navigate("/Update")}>Update</button>
                      <button className="del-button" onClick={()=> deleteNft(item._id)}>Delete</button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MyNFTCard;
