import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./AllNft.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../NavBar/NavigationBar";

const TrendingNFTItems = () => {
  const [allNft, setAllNft] = useState([]);

  useEffect(() => {
    getAllNfts();
  }, []);

  const getAllNfts = async () => {
    try {
      
      const response = await axios.get(
        "http://localhost:4000/nft/nfts",
        
      );
      setAllNft(response?.data?.payload?.allNfts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        <span className="T-NFT-heading heading-gradient absolute-Center">
          ALL NFTs
        </span>
      </div>
      <div className="row container">
        {allNft.length > 0 &&
          allNft.map((item) => {
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
                      <button className="cart-button">Add To Cart</button>
                      <button className="bid-button">Bid</button>
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

export default TrendingNFTItems;
