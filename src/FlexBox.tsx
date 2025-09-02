import React from "react";

const Flexbox: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "12px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        height: "100vh",
        gap: "1px",
        background: "#222",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Div1 - spans 2 rows  */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "calc(50% - 10px)",
          background: "gold",
        }}
      >
        Div1
      </div>

      {/* Div2 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "crimson",
        }}
      >
        Div2
      </div>

      {/* Div3 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "hotpink",
        }}
      >
        Div3
      </div>

      {/* Div4  */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 40%",
          height: "25%",
          background: "steelblue",
        }}
      >
        Div4
      </div>

      {/* Div5  */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 40%",
          height: "25%",
          background: "lightseagreen",
        }}
      >
        Div5
      </div>

      {/* Div6 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "crimson",
        }}
      >
        Div6
      </div>

      {/* Div7 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "lightseagreen",
        }}
      >
        Div7
      </div>

      {/* Div8  */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "calc(50% - 10px)",
          background: "gold",
        }}
      >
        Div8
      </div>

      {/* Div9  */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 40%",
          height: "25%",
          background: "mediumpurple",
        }}
      >
        Div9
      </div>

      {/* Div10 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "lightseagreen",
        }}
      >
        Div10
      </div>

      {/* Div11 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "steelblue",
        }}
      >
        Div11
      </div>

      {/* Div12 s */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 40%",
          height: "25%",
          background: "crimson",
        }}
      >
        Div12
      </div>

      {/* Div13 */}
      <div
        style={{
          ...boxStyle,
          flex: "1 1 20%",
          height: "25%",
          borderRadius: "50%",
          background: "steelblue",
        }}
      >
        Div13
      </div>
    </div>
  );
};

export default Flexbox;
