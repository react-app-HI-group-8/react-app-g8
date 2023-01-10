import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

import "./Marketplace.scss";

const Marketplace = () => {
  return (
    <div id="marketplace">
      <Banner headingType="marketPlace" />
      <section className="marketplace">
        <div className="left">
          <Card />
        </div>
        <div className="right">
          <div className="right_top">
            <p>December 14, 2022</p>
            <h3>
              THE FEW MOST
              <br />
              POPULAR NFT CARDS
            </h3>
            <p>Owned By OXOJ</p>
            <p>
              A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE ETHEREUM
              BLOCKCHAIN. A SET OF 3.333 UNIQUE COLLECTABLES, THE ADDITION TO
              YOUR NFT COLLECTION YOU’VE BEEN WAITING FOR.
            </p>
          </div>
          <div className="right_bottom">
            <img src="/imgs/nft.png" alt="NFT" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
