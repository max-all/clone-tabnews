import { useEffect } from "react";

const bodyStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: "black",
  height: "100vh",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const headingStyle = {
  color: "white",
  textAlign: "center",
};

function Home() {
  useEffect(() => {
    Object.assign(document.body.style, bodyStyle);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Patricia, Eu amo Você!</h1>
    </div>
  );
}

export default Home;
