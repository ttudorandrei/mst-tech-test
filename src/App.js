import React, { useState } from "react";

import "./App.css";
import LandingPage from "./pages/landing-page";

const App = () => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      <h1>
        <i className="fa fa-circle text-danger Blink"></i>&nbsp; MST Systems -
        Live Data Table
      </h1>
      {!showData && (
        <button
          className="show-table-button"
          onClick={() => {
            setShowData(true);
          }}
        >
          Show Table
        </button>
      )}
      {showData && <LandingPage />}
    </div>
  );
};

export default App;
