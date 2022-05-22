import React from "react";

// For the images that shown on the DOM.

function RestaurantDetails({
  name,
  cuisine,
  costForTwo,
  rating,
  deliveryTime,
  payment_methods,
  src,
  reviews,
  votes,
  minOrder
}) {
  return (
    <div>
      <div style={{display: "flex",height:"80px", border:"1px solid black", gap: "0.5rem", margin:"1rem", width: "45%", margin:"auto", textAlign:"center"}}>
      <img src={src} alt={cuisine} />
      <div>
        <div> {cuisine} </div>
        <div> Min. Order : {minOrder} </div>
        <div> Cost : ${costForTwo} </div>
        <div>Accepts  {JSON.stringify(payment_methods)} </div>
      </div>
      <div>
        <div>Ratings : {rating}</div>
        <div>Votes : {votes}</div>
        <div>Reviews : {reviews}</div>
        <div>ServingTime : {deliveryTime} </div>
      </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
