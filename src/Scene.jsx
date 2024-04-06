import React from "react";
const backgroundImages = {
  beginning: "https://cdn.glitch.com/475e1d65-6dfb-4a37-92b8-ffd178d08d8c%2Fbeginning.jpg?1520817106330",
  farm: "https://cdn.glitch.com/475e1d65-6dfb-4a37-92b8-ffd178d08d8c%2Ffarm.jpg?1520817107140", 
  barn: "https://cdn.glitch.com/475e1d65-6dfb-4a37-92b8-ffd178d08d8c%2Fbarn.jpg?1520817110937", 
  city: "https://cdn.glitch.com/475e1d65-6dfb-4a37-92b8-ffd178d08d8c%2Fcity.jpg?1520817106054", 
  bar: "https://cdn.glitch.com/475e1d65-6dfb-4a37-92b8-ffd178d08d8c%2Fbar.jpg?1520817105083", 
  store: "https://cdn.glitch.com/475e1d65-6dfb-4a37-92b8-ffd178d08d8c%2Fstore.jpg?1520817110669" 
};
const defaultImage = "";
export default ({ tags }) => {
  return (
    <section
      className="scene"
      style={{
        backgroundImage: `url(${
          tags && backgroundImages[tags.background]
            ? backgroundImages[tags.background]
            : defaultImage
        })`
      }}
    />
  );
};