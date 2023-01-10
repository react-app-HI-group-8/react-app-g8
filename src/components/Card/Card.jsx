import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="card_wrapper">
      <div className="card_header">
        <div className="avatars">
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
        </div>
        <div className="card_info">
          <p>Remaining Time</p>
          <p>09H : 11M : 07S </p>
        </div>
      </div>
      <div className="card_main_img">
        <img src="/imgs/hero.png" alt="placeholder" />
      </div>
      <div className="card_footer">
        <div className="footer_info">
          <p>Current Bid</p>
          <p>7 ETH</p>
        </div>
        <Button buttonType="btnPurple">Bid Now</Button>
      </div>
    </div>
  );
};

export default Card;
