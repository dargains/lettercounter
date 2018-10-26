import React from "react";

export default ({preset,letters,handleClick}) => (
  <div className="flip-container" data-letters={letters} onClick={handleClick}>
    <div className="flipper">
      <div className="front">{preset}</div>
      <div className="back">{letters}</div>
    </div>
  </div>
)
