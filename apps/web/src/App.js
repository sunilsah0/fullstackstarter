import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Fullstack Starter Web App</h1>
      <p>Connected to API: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
}

export default App;

