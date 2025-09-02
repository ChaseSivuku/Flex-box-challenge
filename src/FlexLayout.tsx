import React from "react";

//colors
const colorPalette = {
  yellow: "#fdd835",
  red: "#ef5350",
  pink: "#d81b60",
  indigo: "#1a237e",
  cyan: "#80deea",
  blue: "#03a9f4",
  purple: "#5e35b1",
};

//layout
const layoutData = [
  // First row
  [
    { color: colorPalette.yellow, flex: 2 },
    { color: colorPalette.red, flex: 1, isRound: true },
    { color: colorPalette.pink, flex: 1 },
    { color: colorPalette.indigo, flex: 2 },
  ],
  // Second row
  [
    { color: colorPalette.cyan, flex: 2 },
    { color: colorPalette.pink, flex: 1, isRound: true },
    { color: colorPalette.blue, flex: 1, isRound: true },
  ],
  // Third row
  [
    { color: colorPalette.purple, flex: 2 },
    { color: colorPalette.cyan, flex: 1, isRound: true },
    { color: colorPalette.yellow, flex: 1 },
  ],
  // Fourth row
  [
    { color: colorPalette.indigo, flex: 1, isRound: true },
    { color: colorPalette.red, flex: 2 },
    { color: colorPalette.indigo, flex: 1, isRound: true },
  ],
];

const mainContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  margin: "0",
  padding: "10px",
  boxSizing: "border-box",
  justifyContent: "center",
  gap: "10px",
  backgroundColor: "#1c1c1c", 
};

const rowStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  gap: "10px",
};

//All divs
const baseItemStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
};

const FlexLayout = () => {
  return (
    <div style={mainContainerStyles}>
      {layoutData.map((row, rowIndex) => (
        <div key={rowIndex} style={rowStyles}>
          {row.map((item, itemIndex) => (
            <div
              key={itemIndex}
              style={{
                ...baseItemStyles,
                backgroundColor: item.color,
                flex: item.flex,
                borderRadius: item.isRound ? "50%" : "5px",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FlexLayout;
