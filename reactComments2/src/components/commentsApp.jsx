import React, { useState } from "react";

const Commentsapp = ({data}) => {
  const [show, setShow] = useState(false);
  if(data.replies){
      return (
        <div>
          <div className="container">
            <div className="top">
              <div className="comments">
                <span onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
                  {show ? "hide replies" : "show replies"}
                </span>
                <div> {data.author} </div>
                <div> {data.points} </div>
                <div> {data.timestamp.split(" ")} </div>
              </div>
            </div>
            {data.body}
            <br />
          </div>
          <div style={{ display: show ? "block" : "none", paddingLeft: "5%" }}>
            {data.replies.map((item) => {
            return <Commentsapp data={item} />;
          })}
        </div>
        </div>
      );
  }
  else{
    return(
        <div className="top" style={{ paddingLeft: "5px" }}>
        <div className="comm">
          <div> {data.author}</div>
          <div> {data.points} points</div>
          <div> {data.timestamp.split(" ")}</div>
        </div>
        <div>
          {data.body}
          <br />
        </div>
      </div>
    )
  }
};

export default Commentsapp;
