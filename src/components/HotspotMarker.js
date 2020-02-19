import React, { useState } from "react";
import Logo from "../logo.png";
import HotspotPopup from "./HotspotPopup";




const HotspotMarker = (handler) => {
  const size = 30;

  return (
    <div>
      <img src = {Logo}
      width = {size}
      height = {size}
      style={{
          cursor: "pointer",
          fill: "#d00",
          stroke: "none",
          transform: `translate(${-size / 2}px,${-size}px)`
          }}
          onClick={() => handler(true)}

          ></img>
    </div>
  );
};





export default HotspotMarker;
