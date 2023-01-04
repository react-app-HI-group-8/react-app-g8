import React from "react";
import Card from "../card/Card";
import "./Marketplace.scss";

const Marketplace = () => {
  return (
    <section className="marketplace" id="marketplace">
      <div className="left">
        <Card />
      </div>
      <div className="right">
        <h4>December 14, 2022</h4>
        <h2>
          RARE
          <span>VIRTUAL WORLD</span>
        </h2>
        <p>Owned By OXOJ</p>
        <p>
          A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE ETHEREUM BLOCKCHAIN. A
          SET OF 3.333 UNIQUE COLLECTABLES, THE ADDITION TO YOUR NFT COLLECTION
          YOU’VE BEEN WAITING FOR.
        </p>
        <img src="/imgs/nft.png" alt="NFT" />
      </div>
    </section>
  );
};

export default Marketplace;
