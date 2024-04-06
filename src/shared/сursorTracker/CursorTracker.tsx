import React from "react";

export const CursorTracker = () => {
  const handleMouseMove = (event: React.MouseEvent) => {
    // const { clientX, clientY } = event;
    // console.log("Координаты курсора:", clientX, clientY);
  };

  const styleCT: React.CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
  };

  return <div style={styleCT} onMouseMove={handleMouseMove}></div>;
};
